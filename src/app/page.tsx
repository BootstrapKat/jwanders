"use client"; // Necessary for Next.js components using hooks

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-[#0A0F1B] to-black text-[#E4E7EA]">
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
          </ul>
        </div>
      </section>

      <section className="container flex mx-auto items-center justify-center text-lg">
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

      {/* Feature Blurbs */}
      <section className="p-4 md:p-0 md:mt-4 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:bg-[#E4E7EA] md:bg-gradient-to-r md:from-[#E4E7EA] md:to-[#bfc3c7] text-[#0A0F1B]">
        {/* Writing Feature */}
        <Link
          href="/writing"
          className="p-3 rounded-lg relative overflow-hidden text-center group border border-black md:border-0 bg-[#E4E7EA] md:bg-transparent"
        >
          <h2 className="text-3xl font-semibold mb-2">Writing</h2>
          <span className="absolute top-0 right-0 h-full w-[2px] bg-black transform scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100"></span>
        </Link>

        {/* Games Feature */}
        <Link
          href="/games"
          className="p-3 rounded-lg relative overflow-hidden text-center group border border-black md:border-0 bg-[#E4E7EA] md:bg-transparent"
        >
          <h2 className="text-3xl font-semibold mb-2">Games</h2>
          <span className="absolute top-0 right-0 h-full w-[2px] bg-black transform scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100"></span>
        </Link>

        {/* Radio Feature */}
        <Link
          href="/radio"
          className="p-3 rounded-lg relative overflow-hidden text-center group border border-black md:border-0 bg-[#E4E7EA] md:bg-transparent"
        >
          <h2 className="text-3xl font-semibold mb-2">Radio</h2>
          <span className="absolute top-0 right-0 h-full w-[2px] bg-black transform scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100"></span>
        </Link>
      </section>

      <section className="flex bg-[#A2F3FF] mt-8">
        <blockquote className="w-full bg-gradient-to-r from-[#E4E7EA] to-[#bfc3c7] text-[#0A0F1B] text-center py-12 px-4 md:px-8 text-3xl md:text-4xl font-semibold italic border-l-4 border-[#615648]">
          <p>
            “She smeared a jagged swath along the cave wall with the palm of her
            hand. Outside the cave, a horizon of jagged mountains sprang forth.”{" "}
            <br></br>
            <span className="text-2xl">-On the Cave Wall</span>
          </p>
        </blockquote>
      </section>
    </main>
  );
}
