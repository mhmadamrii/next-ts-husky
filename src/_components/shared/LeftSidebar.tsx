'use client';

import Link from 'next/link';
import Image from 'next/image';

import { usePathname, useRouter } from 'next/navigation';
import { sidebarLinks } from '../../../constants';

export default function LeftSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="flex flex-col space-y-5">
      <h1 className='text-4xl'>Hello world sksksk</h1>
      {sidebarLinks.map((link, idx) => {
        const isActive = pathname === link.route;

        return (
          <div
            key={idx}
            className={`${isActive ? 'bg-blue-500' : 'bg-black'} text-white`}
          >
            <Link href={link.route}>{link.label}</Link>
            <Image src={link.imgURL} width={24} height={24} alt="link logo" />
          </div>
        );
      })}
    </div>
  );
}
