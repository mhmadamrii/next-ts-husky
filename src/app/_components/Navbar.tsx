import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="border-2">
      <h2>Some Navbar</h2>
      <Image
        src="/logo.svg"
        alt="logo"
        width={118}
        height={8}
        className="object-contain"
      />
    </header>
  );
};

export default Navbar;
