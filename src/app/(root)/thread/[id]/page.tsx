import ThreadCard from '@/_components/cards/ThreadsCard';
import Comment from '@/_components/forms/Comment';

import { currentUser } from '@clerk/nextjs';
import { fetchUser } from '../../../../../lib/actions/user.actions';
import { fetchThreadById } from '../../../../../lib/actions/thread.actions';

export default async function ThreadDetail({
  params,
}: {
  params: { id: string };
}) {
  const user = await currentUser();
  console.log('user', user);
  // @ts-ignore
  const userInfo = await fetchUser(user?.id);
  const thread = await fetchThreadById(params.id);

  return (
    <div>
      <ThreadCard
        key={thread._id}
        id={thread._id}
        // @ts-ignore
        currentUserId={user.id}
        parentId={thread.parentId}
        content={thread.text}
        author={thread.author}
        community={thread.community}
        createdAt={thread.createdAt}
        comments={thread.children}
      />

      <div className="mb-10">
        <Comment
          threadId={params.id}
          // @ts-ignore
          currentUserImg={user?.imageUrl}
          currentUserId={JSON.stringify(userInfo?._id)}
        />
      </div>

      <div className="flex flex-col space-y-3">
        {thread.children.map((childItem: any) => (
          <ThreadCard
            key={childItem._id}
            id={childItem._id}
            // @ts-ignore
            currentUserId={user?.id}
            parentId={childItem.parentId}
            content={childItem.text}
            author={childItem.author}
            community={childItem.community}
            createdAt={childItem.createdAt}
            comments={childItem.children}
            isComment
          />
        ))}
      </div>
    </div>
  );
}
