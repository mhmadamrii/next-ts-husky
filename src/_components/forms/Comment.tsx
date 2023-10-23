'use client';

import Image from 'next/image';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { usePathname } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { CommentValidation } from '../../../lib/validations/thread';
import { addCommentToThread } from '../../../lib/actions/thread.actions';
import {
  Form,
  FormField,
  FormLabel,
  FormItem,
  FormControl,
  Input,
} from '@/components/ui';

export default function Comment({
  threadId,
  currentUserImg,
  currentUserId,
}: {
  threadId: string;
  currentUserImg: string;
  currentUserId: string;
}) {
  const pathname = usePathname();

  const form = useForm<z.infer<typeof CommentValidation>>({
    resolver: zodResolver(CommentValidation),
    defaultValues: {
      thread: '',
    },
  });

  const handleSuperSubmit = async (
    values: z.infer<typeof CommentValidation>,
  ) => {
    await addCommentToThread(
      threadId,
      values.thread,
      JSON.parse(currentUserId),
      pathname,
    );
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSuperSubmit)}>
        <FormField
          control={form.control}
          name="thread"
          render={({ field }) => (
            <FormItem className="flex space-x-3 mt-4 items-center">
              <FormLabel>
                <Image
                  src={currentUserImg}
                  alt="user commenter image"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              </FormLabel>
              <FormControl>
                <Input type="text" {...field} placeholder="comment..." />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
