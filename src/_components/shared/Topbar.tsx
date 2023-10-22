'use client';

import * as React from 'react';
import { SignOutButton, OrganizationSwitcher } from '@clerk/nextjs';
import 'react-modern-drawer/dist/index.css';
import Drawer from 'react-modern-drawer';
import Hamburger, { Squash as Humberger } from 'hamburger-react';
import Link from 'next/link';

export default function Topbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="flex items-center justify-between px-4 h-16 border-2 bg-slate-100">
      <Link href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
          />
        </svg>
      </Link>

      <div className="inline-block md:hidden">
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
        <Drawer open={isOpen} onClose={toggleDrawer} direction="left">
          <div className="mt-10">
            <SignOutButton>
              <div className="text-white cursor-pointer bg-blue-500 rounded-full md:py-3 md:px-5 py-1 px-2">
                <h1>signout</h1>
              </div>
            </SignOutButton>
          </div>
        </Drawer>
      </div>
      <div className="hidden md:inline-block">
        <OrganizationSwitcher
          appearance={{
            elements: {
              organizationSwitcherTrigger: '',
            },
          }}
        />
      </div>
    </div>
  );
}
