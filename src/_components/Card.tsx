'use client';

import Image from 'next/image';

export default function Card({
  firstName,
  lastName,
  email,
  avatar,
}: {
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
}) {
  return (
    <div className="flex border-2 w-80 px-5 py-5 rounded-sm">
      <Image
        src={avatar}
        width={40}
        height={40}
        alt="some avatars"
        className="rounded-full"
      />

      <div className="pl-4">
        <h1>{firstName}</h1>
        <h1 className='text-sm'>@{lastName}</h1>
      </div>
    </div>
  );
}
