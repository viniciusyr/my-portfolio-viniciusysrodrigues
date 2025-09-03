'use client';

import Image from "next/image";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useDarkMode } from "@/hooks/useDarkMode";

export default function Navbar() {
  const { isDark, toggle } = useDarkMode();


  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <nav className="pt-10 flex justify-between items-center mb-16">
      <div className="flex items-center gap-4">
        <a href="/" className="cursor-pointer">
          <Image
            src="/vinicius.jpeg"
            alt="Logo"
            width={48}
            height={48}
            className="h-12 w-12 rounded-full shadow-[0px_0px_10px_#009ffb]"
          />
        </a>
        <div className="flex flex-col">
          <p className="text-gray-900 dark:text-gray-100 font-bold text-md">
            Vinicius Rodrigues 🇧🇷
          </p>
          <p className="text-gray-500 dark:text-gray-300 font-normal text-sm">
            Fullstack Developer
          </p>
        </div>
      </div>

      {mounted && (
        <button
          onClick={toggle}
          className="relative w-10 h-10 rounded-lg flex items-center justify-center transition"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Sun className="w-6 h-6 text-gray-400 hover:text-amber-300 transition-transform duration-300" />
          ) : (
            <Moon className="w-6 h-6 text-gray-400 hover:text-[#009ffb] transition-transform duration-300" />
          )}
        </button>
      )}
    </nav>
  );
}
