import Link from 'next/link';
import Image from 'next/image';

export default function ProfileHeader({
  accountId,
  authUserId,
  name,
  username,
  imgUrl,
  bio,
}: {
  accountId: string;
  authUserId: string;
  name: string;
  username: string;
  imgUrl: string;
  bio: string;
}) {
  return (
    <>
      <div className="flex w-full items-center">
        <div>
          <Image
            src={imgUrl}
            alt="image"
            width={40}
            height={40}
            className="rounded-full object-cover shadow-2xl"
          />
        </div>

        <div className="pl-2">
          <h2 className="text-left font-bold text-heading3-bold">{name}</h2>
          <p className="text-xs text-gray-500">@{username}</p>
        </div>
      </div>

      <div className="mt-4">
        <h2>My bio: {bio}</h2>
      </div>
    </>
  );
}
