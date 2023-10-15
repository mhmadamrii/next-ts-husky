'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import * as z from 'zod';
import { TAccountProfileProps } from '../../../lib/types';
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
//   Button,
//   Input,
//   Textarea,
// } from '@/components/ui';
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
import { UserValidation } from '../../../lib/validations/user';
import { isBase64Image } from '@/lib/utils';
import { useUploadThing } from '@/lib/uploadthing';

export default function AccountProfile({
  user,
  btnTitle,
}: TAccountProfileProps) {
  console.log('user', user);
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

  const handleSuperSubmit = async (values: z.infer<typeof UserValidation>) => {
    const blob = values.profile_photo;
    const isHasImageChanged = isBase64Image(blob);

    if (isHasImageChanged) {
      const imgRes = await startUpload(files);

      if (imgRes && imgRes[0].fileUrl) {
        values.profile_photo = imgRes[0].fileUrl;
      }
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

  return (
    <div className="container mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSuperSubmit)}>
          <FormField
            name="profile_photo"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>
                    {field.value ? (
                      <Image
                        src={field?.value}
                        alt="photos"
                        height={40}
                        width={40}
                      />
                    ) : (
                      <Image
                        src="/assets/profile.svg"
                        alt="default"
                        height={40}
                        width={40}
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
            name="username"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Input here</FormLabel>
                  <FormControl>
                    <Input {...field} onChange={(e) => console.log('e', e)} />
                  </FormControl>
                </FormItem>
              );
            }}
          />
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
