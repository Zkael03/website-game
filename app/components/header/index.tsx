'use client';

import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent transition-all duration-300">
<div className="w-full px-3 md:px-6 py-3 flex items-center justify-between">

        <Image
          src="/images/logo.png"
          alt="Leyndell Logo"
          width={200}
          height={50}
          className="object-contain"
        />
        <nav className="flex gap-4 text-white drop-shadow">
          <Link
            href="/"
            className="px-4 py-2 rounded-full hover:bg-white/20 transition"
          >
            Home
          </Link>
          <Link
            href="/info-games"
            className="px-4 py-2 rounded-full hover:bg-white/20 transition"
          >
            Infor Game
          </Link>
          <Link
            href="/about"
            className="px-4 py-2 rounded-full hover:bg-black/20 transition"
          >
            Karakter
          </Link>
          <Link
            href="/about"
            className="px-4 py-2 rounded-full hover:bg-black/20 transition"
          >
            Akun
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
