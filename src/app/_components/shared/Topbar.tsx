import { SignOutButton, OrganizationSwitcher } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';

export default function Topbar() {
  return (
    <div className="bg-slate-300 flex flex-col md:flex-row justify-between items-center">
      <Link className="text-4xl" href="/">
        <Image src="/assets/logo.svg" alt="logo" width={28} height={28} />
      </Link>

      <div className="border-2 border-blue-700">
        <p>test</p>
        {/* <SignedIn> */}
        <SignOutButton>
          <div className="text-black">
            <h1>signout</h1>
          </div>
        </SignOutButton>
        {/* </SignedIn> */}
      </div>
      <OrganizationSwitcher
        appearance={{
          elements: {
            organizationSwitcherTrigger: '',
          },
        }}
      />
    </div>
  );
}
