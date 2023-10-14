'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import * as z from 'zod';
import { TAccountProfileProps } from '../../../lib/types';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Button,
  Input,
  Textarea,
} from '@/components/ui';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserValidation } from '../../../lib/validations/user';

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

  const handleSubmit = () => {};

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
        <form className="border-2 " onSubmit={form.handleSubmit(handleSubmit)}>
          <FormField
            control={form.control}
            name="profile_photo"
            render={({ field }) => {
              console.log('field', field);
              return (
                <FormItem className="flex items-center">
                  <FormLabel>
                    {field.value ? (
                      <Image
                        src={field.value}
                        width={100}
                        height={100}
                        alt="field"
                        priority
                        className="rounded-full"
                      />
                    ) : (
                      <Image
                        src="/assets/profile.svg"
                        width={24}
                        height={24}
                        alt="Default profile"
                        className="rounded-full"
                        priority
                      />
                    )}
                  </FormLabel>
                  <FormControl>
                    <Input type="file" placeholder="Input here" {...field} />
                  </FormControl>
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col gap-3">
                <FormLabel className="text-base-semibold text-light-2">
                  Name
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    className="account-form_input no-focus"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col gap-3">
                <FormLabel className="text-base-semibold text-light-2">
                  Username
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    className="account-form_input no-focus"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col gap-3">
                <FormLabel className="text-base-semibold text-light-2">
                  Bio
                </FormLabel>
                <FormControl>
                  <Textarea
                    rows={10}
                    className="account-form_input no-focus"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
