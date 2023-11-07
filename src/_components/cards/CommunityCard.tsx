'use client';

import Image from 'next/image';
import { Button } from '@nextui-org/react';
import { useRouter, useSearchParams } from 'next/navigation';
import CommunityModal from '../modals/CommunityModal';

export default function CommunityCard({ community }: { community: any }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isOpenModal = searchParams.get('modal');

  const handleOpenModal = () => {
    router.push('?modal=true');
  };

  return (
    <>
      <div
        key={community.id}
        className="flex justify-between items-center border-2 p-3 mt-2 rounded-sm w-full"
      >
        <div className="flex space-x-2 items-center">
          <Image
            src={community.image}
            width={40}
            height={40}
            alt="community img"
            className="rounded-full"
          />
          <h1 className="truncate">{community.name}</h1>
        </div>

        <div>
          <Button
            onClick={handleOpenModal}
            className="border-2 hidden lg:inline-block text-sm py-2 rounded-md bg-sky-500 hover:bg-sky-600 text-white"
          >
            View
          </Button>
        </div>
      </div>

      {isOpenModal === 'true' ? <CommunityModal /> : null}
    </>
  );
}
