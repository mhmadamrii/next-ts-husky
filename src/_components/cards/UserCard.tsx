'use client';

import Image from 'next/image';

export default function UserCard({
  id,
  name,
  username,
  imgUrl,
  personType,
}: {
  id: string;
  name: string;
  username: string;
  imgUrl: string;
  personType: string;
}) {
  return (
    <div className="border-2 rounded-md p-4 flex">
      <div>
        <Image
          src={imgUrl}
          alt="user_logo"
          width={30}
          height={30}
          className="rounded-full"
        />
      </div>

      <div>
        <h1>{name}</h1>
        <h1>@{username}</h1>
      </div>
    </div>
  );
}
