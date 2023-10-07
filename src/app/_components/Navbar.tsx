'use client';

import Image from 'next/image';
import { Toaster, toast } from 'sonner';

const Navbar = () => {
  return (
    <>
      <Toaster richColors />
      <header>
        <div className="flex items-center justify-between px-1.5 absolute top-0 right-0 left-0 w-full z-50">
          <div
            className="cursor-pointer"
            onClick={() =>
              toast.success('Already at the Home!')
            }
          >
            <Image
              src="/logo-cars.svg"
              alt="logo"
              width={80}
              height={8}
              className="object-contain"
            />
          </div>

          <div className="cursor-pointer">
            <button
              className="text-blue-600 py-4 px-10 rounded-full bg-white"
              onClick={() =>
                toast.error('Under Development!')
              }
            >
              Sign In
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
