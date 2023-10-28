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
    <div>
      <Image src={imgUrl} alt="user_logo" width={30} height={30} />
    </div>
  );
}
