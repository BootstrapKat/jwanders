"use client"; // Necessary for Next.js components using hooks

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-r from-[#0A0F1B] to-black text-[#E4E7EA]">
      {/* Hero Section */}
      <section className="container flex flex-col mx-auto pt-8 px-8 pb-4">
        <div className="relative mb-6 ml-auto">
          <Image
            src="/images/justin.jpg"
            alt="Justin W. Anderson"
            width={200}
            height={200}
            className="rounded-full p-1 border border-[#E4E7EA] border-opacity-40"
          />
        </div>
        <div className="">
          <ul className="relative">
            <li className="relative pl-4 before:absolute before:left-0 before:top-full before:w-[84vw] before:border-t before:border-gray-300 before:opacity-40 tracking-[0.25em]">
              game writer
            </li>
            <li className="relative pl-4 before:absolute before:left-0 before:top-full before:w-[84vw] before:border-t before:border-gray-300 before:opacity-40 tracking-[0.25em]">
              narrative designer
            </li>
            <li className="relative pl-4 before:absolute before:left-0 before:top-full before:w-[84vw] before:border-t before:border-gray-300 before:opacity-40 tracking-[0.25em]">
              author
            </li>
            <li className="relative pl-4 before:absolute before:left-0 before:top-full before:w-[84vw] before:border-t before:border-gray-300 before:opacity-40 tracking-[0.25em]">
              radio host
            </li>
            <li className="relative pl-4 before:absolute before:left-0 before:top-full before:w-[84vw] before:border-t before:border-gray-300 before:opacity-40 tracking-[0.25em]">
              submarine veteran
            </li>
          </ul>
        </div>
      </section>

      <section className="container flex mx-auto items-center justify-center text-lg font-afacad mb-12">
        <a
          href="https://www.linkedin.com/in/justinwilliamanderson/"
          target="_blank"
          className="relative inline-block after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-[#E4E7EA] after:scale-x-0 after:origin-left after:transition-transform after:duration-500 hover:after:scale-x-100"
        >
          LinkedIn
        </a>

        <span className="mx-2">/</span>
        <a
          href="mailto:jandersn98@gmail.com"
          className="relative inline-block after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-[#E4E7EA] after:scale-x-0 after:origin-right after:transition-transform after:duration-500 hover:after:scale-x-100"
        >
          Email
        </a>
      </section>

      {/* Feature Cards Section */}
      <section className="container mx-auto px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Games Card */}
          <Link
            href="/games"
            className="group flex flex-col p-6 rounded-lg border border-[#E4E7EA] border-opacity-20 bg-white/5 hover:bg-white/10 transition-all duration-300 ease-in-out"
          >
            <h2 className="text-2xl font-semibold mb-3 tracking-wide group-hover:text-white">
              Games
            </h2>
            <p className="text-sm text-[#E4E7EA] opacity-70 leading-relaxed">
              Games I've worked on
            </p>
          </Link>

          {/* Writing Card */}
          <Link
            href="/writing"
            className="group flex flex-col p-6 rounded-lg border border-[#E4E7EA] border-opacity-20 bg-white/5 hover:bg-white/10 transition-all duration-300 ease-in-out"
          >
            <h2 className="text-2xl font-semibold mb-3 tracking-wide group-hover:text-white">
              Writing
            </h2>
            <p className="text-sm text-[#E4E7EA] opacity-70 leading-relaxed">
              Published and unpublished works
            </p>
          </Link>

          {/* Radio Card */}
          <Link
            href="/radio"
            className="group flex flex-col p-6 rounded-lg border border-[#E4E7EA] border-opacity-20 bg-white/5 hover:bg-white/10 transition-all duration-300 ease-in-out"
          >
            <h2 className="text-2xl font-semibold mb-3 tracking-wide group-hover:text-white">
              Radio
            </h2>
            <p className="text-sm text-[#E4E7EA] opacity-70 leading-relaxed">
              Weekly live show on community radio
            </p>
          </Link>

          {/* Resume Card (External Link) */}
          <a
            href="https://drive.google.com/file/d/1raGXXmOzeEGhbuVABtKb1jaLc9YFAZvA/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col p-6 rounded-lg border border-[#E4E7EA] border-opacity-20 bg-white/5 hover:bg-white/10 transition-all duration-300 ease-in-out"
          >
            <h2 className="text-2xl font-semibold mb-3 tracking-wide group-hover:text-white">
              Resume
            </h2>
            <p className="text-sm text-[#E4E7EA] opacity-70 leading-relaxed">
              Take a look!
            </p>
          </a>
        </div>
      </section>
    </main>
  );
}
