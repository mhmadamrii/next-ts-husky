import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { fetchUser } from '@/lib/actions/user.actions';

import PostThread from '@/components/forms/PostThread';

export default async function CreateThread() {
  const user = await currentUser();

  if (!user) return null;
  const userInfo = await fetchUser(user.id);
  if (!userInfo.onboarded) {
    redirect('/onboarding');
  }

  return (
    <>
      <center>
        <h1>Create threads</h1>
      </center>
      <div className="w-full">
        <PostThread userId={userInfo._id} />
      </div>
    </>
  );
}
