'use client';

import Link from 'next/link';
import Image from 'next/image';

import { usePathname, useRouter } from 'next/navigation';
import { sidebarLinks } from '../../../constants';
import { useTheme } from 'next-themes';

export default function LeftSidebar() {
  const { setTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();

  const handleLight = () => {
    setTheme('light');
  };

  const handleDark = () => {
    setTheme('dark');
  };
  return (
    <div className="hidden md:flex flex-col space-y-5 border-2">
      {sidebarLinks.map((link, idx) => {
        const isActive = pathname === link.route;
        return (
          <div
            key={idx}
            className={`${
              isActive ? 'text-black' : 'text-black'
            } text-white flex space-x-5 bg-blue-950`}
          >
            <Image src={link.imgURL} width={24} height={24} alt="link logo" />
            <Link href={link.route}>{link.label}</Link>
          </div>
        );
      })}
    </div>
  );
}
