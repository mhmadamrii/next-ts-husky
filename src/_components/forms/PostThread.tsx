'use client';

import * as React from 'react';
import * as z from 'zod';

import { useForm } from 'react-hook-form';
import { useOrganization } from '@clerk/nextjs';
import { zodResolver } from '@hookform/resolvers/zod';
import { ThreadValidation } from '../../../lib/validations/thread';
import { usePathname, useRouter } from 'next/navigation';

import { Button } from '@/components/ui';
import { Textarea } from '@/components/ui';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui';
import { createThread } from '../../../lib/actions/thread.actions';

export default function PostThread({ userId }: { userId: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const { organization } = useOrganization();

  const form = useForm<z.infer<typeof ThreadValidation>>({
    resolver: zodResolver(ThreadValidation),
    defaultValues: {
      thread: '',
      accountId: userId,
    },
  });

  const handleSuperSubmit = async (
    values: z.infer<typeof ThreadValidation>,
  ) => {
    console.log('values', values);

    await createThread({
      text: values.thread,
      author: userId,
      communityId: null,
      path: pathname,
    });

    router.push('/');
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSuperSubmit)}>
        <FormField
          control={form.control}
          name="thread"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Create thread</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <Button type="submit" className="w-full">
          Create new Thread!
        </Button>
      </form>
    </Form>
  );
}
