import { SignedIn, SignOutButton, OrganizationSwitcher } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';

export default function Topbar() {
  return (
    <div className="flex flex-row md:flex-row justify-between items-center px-5 h-fit border-2">
      <Link className="text-4xl" href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
          />
        </svg>
      </Link>

      <div className="flex items-center space-x-5">
        <SignedIn>
          <SignOutButton>
            <div className="text-white cursor-pointer bg-blue-500 rounded-full md:py-3 md:px-5 py-1 px-2">
              <h1>signout</h1>
            </div>
          </SignOutButton>
        </SignedIn>
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
