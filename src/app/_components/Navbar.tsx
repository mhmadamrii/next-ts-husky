'use client';

import Image from 'next/image';
import { Toaster, toast } from 'sonner';

const Navbar = () => {
  return (
    <>
      <Toaster richColors />
      <header>
        <div className="absolute left-0 right-0 top-0 z-50 flex w-full items-center justify-between px-1.5">
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
              className="rounded-full bg-white px-10 py-4 text-blue-600"
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
