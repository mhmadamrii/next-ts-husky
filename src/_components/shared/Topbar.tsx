'use client';

import * as React from 'react';
import { SignOutButton, OrganizationSwitcher } from '@clerk/nextjs';
import 'react-modern-drawer/dist/index.css';
import Drawer from 'react-modern-drawer';
import Hamburger, { Squash as Humberger } from 'hamburger-react';

export default function Topbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="flex items-center justify-between px-4 h-16 border-2 bg-slate-100">
      <OrganizationSwitcher
        appearance={{
          elements: {
            organizationSwitcherTrigger: '',
          },
        }}
      />
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
        <SignOutButton>
          <div className="text-white cursor-pointer bg-blue-500 rounded-full md:py-3 md:px-5 py-1 px-2">
            <h1>signout</h1>
          </div>
        </SignOutButton>
      </div>
    </div>
  );
}
