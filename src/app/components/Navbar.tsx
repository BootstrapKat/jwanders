"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-md border-b border-[#e4e7ea]">
      <div className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl">
          <Link href="/">Justin W. Anderson</Link>
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="focus:outline-none text-white"
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Menu for Desktop */}
        <div className="hidden md:flex space-x-4">
          <Link href="/writing" className="hover:text-blue-400">
            Writing
          </Link>
          <Link href="/games" className="hover:text-blue-400">
            Games
          </Link>
          <Link href="/radio" className="hover:text-blue-400">
            Radio
          </Link>
        </div>
      </div>

      {/* Sliding Menu for Mobile */}
      <div
        className={`${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } transform transition-all duration-300 ease-in-out bg-[#0a0f1b] shadow-lg overflow-hidden z-40 md:hidden border-t border-border-[#e4e7ea]`}
      >
        <div className="flex flex-col space-y-4 p-4">
          <Link
            href="/writing"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-400"
          >
            Writing
          </Link>
          <Link
            href="/games"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-400"
          >
            Games
          </Link>
          <Link
            href="/radio"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-400"
          >
            Radio
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
