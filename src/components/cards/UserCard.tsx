'use client';

import Image from 'next/image';
import { Button, User } from '@nextui-org/react';

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
    <div className="border-2 rounded-md p-4 flex bg-gray-100 justify-between">
      <div>
        <User
          name="Jane Doe"
          description="Product Designer"
          avatarProps={{
            src: imgUrl,
          }}
        />
      </div>

      <div>
        <Button color="primary">View profile</Button>
      </div>
    </div>
  );
}
