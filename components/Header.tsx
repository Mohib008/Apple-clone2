"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md py-2" : "bg-black/80 py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-white hover:text-gray-300 transition">
            Store
          </Link>
          <Link href="/" className="text-white hover:text-gray-300 transition">
            Mac
          </Link>
          <Link href="/" className="text-white hover:text-gray-300 transition">
            iPad
          </Link>
          <Link href="/" className="text-white hover:text-gray-300 transition">
            iPhone
          </Link>
          <Link href="/" className="text-white hover:text-gray-300 transition">
            Watch
          </Link>
          <Link href="/" className="text-white hover:text-gray-300 transition">
            AirPods
          </Link>
        </div>
        <button className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
}

export default Header;
// This is a Next.js 13+ app directory component
