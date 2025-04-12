// src/app/layout.tsx
import type { Metadata } from "next";
import { Afacad } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Load the Google font properly
const afacad = Afacad({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-afacad",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Justin W. Anderson",
  description: "Game Writer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={afacad.variable}>
      <body className="antialiased min-h-screen flex flex-col bg-gradient-to-l from-black to-[#0A0F1B] text-[#E4E7EA] font-afacad">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
