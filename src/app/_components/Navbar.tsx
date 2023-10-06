'use client';

import Image from 'next/image';
import { Toaster, toast } from 'sonner';

const Navbar = () => {
  return (
    <>
      <Toaster richColors />
      <header>
        <div className="flex items-center border-2 justify-between px-1.5">
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
