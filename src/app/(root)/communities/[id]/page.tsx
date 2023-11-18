import Image from 'next/image';

import { currentUser } from '@clerk/nextjs';
import { fetchCommunityDetails } from '@/lib/actions/community.actions';
import ProfileHeader from '@/components/shared/ProfileHeader';

export default async function Communities({
  params,
}: {
  params: { id: string };
}) {
  const user = await currentUser();
  if (!user) return null;

  const communityDetails = await fetchCommunityDetails(params.id);
  console.log('community detail', communityDetails);

  return (
    <div>
      <ProfileHeader
        accountId={communityDetails.createdBy.id}
        authUserId={user.id}
        name={communityDetails.name}
        username={communityDetails.username}
        imgUrl={communityDetails.image}
        bio={communityDetails.bio}
        // @ts-ignore
        type="Community"
      />
      <h1>Hello world</h1>
    </div>
  );
}
