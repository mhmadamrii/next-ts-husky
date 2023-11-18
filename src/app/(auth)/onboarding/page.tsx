// @ts-nocheck
import AccountProfile from '@/components/forms/AccountProfile';
import { currentUser } from '@clerk/nextjs';
import Link from 'next/link';

export default async function OnBoarding() {
  const user = await currentUser();
  const userInfo = {};

  const userData = {
    id: user?.id,
    objectId: userInfo?._id,
    username: userInfo?.username || user?.username,
    user: userInfo?.name || user?.firstName || '',
    bio: userInfo?.bio || '',
    image: userInfo?.image || user?.imageUrl,
  };

  return (
    <div>
      <p className="mt-3 text-base-regular text-light-2 text-center">
        Complete your profile to start post😁
      </p>
      <AccountProfile user={userData} btnTitle="whatever" />
    </div>
  );
}
