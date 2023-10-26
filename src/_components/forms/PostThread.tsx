'use client';

import * as React from 'react';
import * as z from 'zod';

import { useSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';
import { useOrganization } from '@clerk/nextjs';
import { zodResolver } from '@hookform/resolvers/zod';
import { ThreadValidation } from '../../../lib/validations/thread';
import { createThread } from '../../../lib/actions/thread.actions';
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

export default function PostThread({ userId }: { userId: string }) {
  const { enqueueSnackbar } = useSnackbar();
  const { organization } = useOrganization();

  const [state, setState] = React.useState({
    isLoading: false,
  });

  const router = useRouter();
  const pathname = usePathname();

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
    setState((prevState) => ({
      ...prevState,
      isLoading: true,
    }));
    try {
      await createThread({
        text: values.thread,
        author: userId,
        communityId: null,
        path: pathname,
      });

      enqueueSnackbar('New post created', {
        variant: 'success',
        autoHideDuration: 1000,
      });
      router.push('/');
    } catch (error) {
      console.log('error', error);
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
                  <Textarea
                    placeholder="What do you think? 🤔"
                    disabled={state.isLoading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <Button type="submit" className="w-full mt-5">
          {state.isLoading ? 'Loading...' : 'Create new Thread!'}
        </Button>
      </form>
    </Form>
  );
}
