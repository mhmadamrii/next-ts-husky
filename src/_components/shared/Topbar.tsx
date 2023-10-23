'use client';

import * as React from 'react';
import { SignOutButton, OrganizationSwitcher } from '@clerk/nextjs';
import 'react-modern-drawer/dist/index.css';
import Drawer from 'react-modern-drawer';
import Hamburger, { Squash as Humberger } from 'hamburger-react';
import Link from 'next/link';

const Home = () => {
  return (
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
        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </svg>
  );
};

const Search = () => {
  return (
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
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  );
};

const CreateThread = () => {
  return (
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
        d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
      />
    </svg>
  );
};

const linkSources = [
  {
    id: 1,
    label: 'Home',
    icon: <Home />,
    path: '/',
  },
  {
    id: 2,
    label: 'Search',
    icon: <Search />,
    path: '/search',
  },
  {
    id: 2,
    label: 'Create Thread',
    icon: <CreateThread />,
    path: '/create-thread',
  },
];

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
            <div className="flex justify-center flex-col ">
              {linkSources.map((link) => (
                <Link
                  href={link.path}
                  key={link.id}
                  className="flex space-x-2 items-center"
                  onClick={() => setIsOpen(false)}
                >
                  {link.icon}
                  <h4 className="text-sm m-2 hover:text-blue-500">
                    {link.label}
                  </h4>
                </Link>
              ))}
            </div>
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
