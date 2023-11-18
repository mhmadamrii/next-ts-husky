import { redirect } from 'next/navigation';
import { fetchUserPosts } from '@/lib/actions/user.actions';
import { fetchCommunityPosts } from '@/lib/actions/community.actions';

import ThreadCard from '../cards/ThreadsCard';

interface Result {
  name: string;
  image: string;
  id: string;
  threads: {
    _id: string;
    text: string;
    parentId: string | null;
    author: {
      name: string;
      image: string;
      id: string;
    };
    community: {
      id: string;
      name: string;
      image: string;
    } | null;
    createdAt: string;
    children: {
      author: {
        image: string;
      };
    }[];
  }[];
}

export default async function ThreadsTab({
  currentUserId,
  accountId,
  accountType,
}: {
  currentUserId: string;
  accountId: string;
  accountType: string;
}) {
  let result: Result;

  if (accountType === 'Community') {
    result = await fetchCommunityPosts(accountId);
  } else {
    result = await fetchUserPosts(accountId);
  }

  // @ts-ignore
  if (!result) {
    redirect('/');
  }

  return (
    <div className="flex flex-col space-y-2">
      {result.threads.map((thread) => (
        <ThreadCard
          key={thread._id}
          id={thread._id}
          currentUserId={currentUserId}
          parentId={thread.parentId}
          content={thread.text}
          author={
            accountType === 'User'
              ? { name: result.name, image: result.image, id: result.id }
              : {
                  name: thread.author.name,
                  image: thread.author.image,
                  id: thread.author.id,
                }
          }
          community={
            accountType === 'Community'
              ? { name: result.name, id: result.id, image: result.image }
              : thread.community
          }
          createdAt={thread.createdAt}
          comments={thread.children}
        />
      ))}
    </div>
  );
}