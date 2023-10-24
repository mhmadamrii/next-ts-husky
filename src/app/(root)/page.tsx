import ThreadCard from '@/_components/cards/ThreadsCard';
import type { Metadata } from 'next';

import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { fetchPosts } from '../../../lib/actions/thread.actions';
import { fetchUser } from '../../../lib/actions/user.actions';

export const metadata: Metadata = {
  title: 'Threads Clone App',
  description: 'A minimalist social media made with ❤️',
};

export default async function RootPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const user = await currentUser();
  // @ts-ignore
  const userInfo = await fetchUser(user.id);

  if (!userInfo?.onboarded) redirect('/onboarding');

  const result = await fetchPosts(
    searchParams.page ? +searchParams.page : 1,
    30,
  );

  return (
    <>
      {result.posts.length === 0 ? (
        <h1 className="text-4xl">No posts found!</h1>
      ) : (
        <>
          <div className="space-y-6 w-full">
            {result.posts.map((post: any) => (
              <ThreadCard
                key={post._id}
                id={post._id}
                // @ts-ignore
                currentUserId={user.id}
                parentId={post.parentId}
                content={post.text}
                author={post.author}
                community={post.community}
                createdAt={post.createdAt}
                comments={post.children}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}
