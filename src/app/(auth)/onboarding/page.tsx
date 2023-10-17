// @ts-nocheck
import AccountProfile from '@/_components/forms/AccountProfile';
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
      <h1>Boarding page</h1>
      <p>Complete your profile first</p>
      <Link
        href="/"
        className="rounded-full cursor-pointer bg-blue-700 px-5 py-5"
      >
        Homepage
      </Link>
      <AccountProfile user={userData} btnTitle="whatever" />
    </div>
  );
}
