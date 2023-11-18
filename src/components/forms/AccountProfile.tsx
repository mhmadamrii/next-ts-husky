'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import * as z from 'zod';
import { TAccountProfileProps } from '@/lib/types';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserValidation } from '@/lib/validations/user';
import { isBase64Image } from '@/lib/utils';
import { useUploadThing } from '@/lib/uploadthing';
import { updateUser } from '@/lib/actions/user.actions';
import { useSnackbar } from 'notistack';
import { usePathname, useRouter } from 'next/navigation';

export default function AccountProfile({
  user,
  btnTitle,
}: TAccountProfileProps) {
  const [state, setState] = React.useState({
    isLoading: false,
  });

  const router = useRouter();
  const pathname = usePathname();

  const form = useForm<z.infer<typeof UserValidation>>({
    resolver: zodResolver(UserValidation),
    defaultValues: {
      profile_photo: user?.image ? user.image : '',
      name: user?.name ? user.name : '',
      username: user?.username ? user.username : '',
      bio: user?.bio ? user.bio : '',
    },
  });

  const [files, setFiles] = useState<File[]>([]);
  const { startUpload } = useUploadThing('media');
  const { enqueueSnackbar } = useSnackbar();

  const handleSuperSubmit = async (values: z.infer<typeof UserValidation>) => {
    setState((prevState) => ({
      ...prevState,
      isLoading: true,
    }));

    const blob = values.profile_photo;
    const isHasImageChanged = isBase64Image(blob);

    if (isHasImageChanged) {
      const imgRes = await startUpload(files);

      if (imgRes && imgRes[0].fileUrl) {
        values.profile_photo = imgRes[0].fileUrl;
      }
    }

    try {
      await updateUser({
        name: values.name,
        path: pathname,
        username: values.username,
        userId: user.id,
        bio: values.bio,
        image: values.profile_photo,
      });

      enqueueSnackbar('Successful!', {
        variant: 'success',
        autoHideDuration: 1000,
      });

      if (pathname === '/profile/edit') {
        router.back();
      } else {
        router.push('/');
      }
    } catch (error) {
      enqueueSnackbar('Something went wrong!', {
        variant: 'error',
        autoHideDuration: 1000,
      });
    }
  };

  const handleImage = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldChange: (value: string) => void,
  ) => {
    e.preventDefault();

    const fileReader = new FileReader();
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFiles(Array.from(e.target.files));

      if (!file.type.includes('image')) return;

      fileReader.onload = async (event) => {
        const imageDataUrl = event.target?.result?.toString() || '';
        fieldChange(imageDataUrl);
      };

      fileReader.readAsDataURL(file);
    }
  };

  React.useEffect(() => {
    return () => {
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
      }));
    };
  }, []);

  return (
    <div className="container mx-auto mt-9">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSuperSubmit)}
          className="flex flex-col space-y-4"
        >
          <FormField
            name="profile_photo"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem className="flex items-center space-x-4">
                  <FormLabel>
                    {field.value ? (
                      <Image
                        src={field?.value}
                        alt="photos"
                        height={40}
                        width={40}
                        className="rounded-full"
                      />
                    ) : (
                      <Image
                        src="/assets/profile.svg"
                        alt="default"
                        height={40}
                        width={40}
                        className="rounded-full"
                      />
                    )}
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      onChange={(e) => handleImage(e, field.onChange)}
                    />
                  </FormControl>
                </FormItem>
              );
            }}
          />
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  {/* <FormLabel>Input here</FormLabel> */}
                  <FormControl>
                    <Input placeholder="Your name? 🤔" {...field} />
                  </FormControl>
                </FormItem>
              );
            }}
          />
          <FormField
            name="username"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  {/* <FormLabel>Username here</FormLabel> */}
                  <FormControl>
                    <Input placeholder="Username? 😭" type="text" {...field} />
                  </FormControl>
                </FormItem>
              );
            }}
          />
          <FormField
            name="bio"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  {/* <FormLabel>Bio below</FormLabel> */}
                  <FormControl>
                    <Input placeholder="Your bio? 🫣" type="text" {...field} />
                  </FormControl>
                </FormItem>
              );
            }}
          />
          <Button type="submit" className="w-full mt-5">
            {state.isLoading ? 'Loading...' : 'Submit'}
          </Button>
        </form>
      </Form>
    </div>
  );
}