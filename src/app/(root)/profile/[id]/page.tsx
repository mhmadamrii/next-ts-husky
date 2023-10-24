import Image from 'next/image';
import ProfileHeader from '@/_components/shared/ProfileHeader';

import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { fetchUser } from '../../../../../lib/actions/user.actions';

export default async function ProfileWithID({
  params,
}: {
  params: { id: string };
}) {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(params.id);
  if (!userInfo?.onboarded) redirect('/onboarding');

  return (
    <div>
      <ProfileHeader
        accountId={userInfo.id}
        authUserId={user.id}
        name={userInfo.name}
        username={userInfo.username}
        imgUrl={userInfo.image}
        bio={userInfo.bio}
      />
    </div>
  );
}
