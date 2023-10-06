import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header>
      <div className="flex items-center border-2 justify-between px-1.5">
        <div>
          <Image
            src="/logo-cars.svg"
            alt="logo"
            width={80}
            height={8}
            className="object-contain"
          />
        </div>

        <div className="cursor-pointer">
          <h1>Sign In</h1>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
