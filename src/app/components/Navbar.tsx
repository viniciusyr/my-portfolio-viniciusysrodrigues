"use client";

import Image from "next/image";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useDarkMode } from "@/hooks/useDarkMode";
import { motion } from "framer-motion";
import SocialMediaButtons from "./SocialMediaButtons";

export default function Navbar() {
  const { isDark, toggle } = useDarkMode();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <motion.nav
      className="max-w-[656px] mx-auto bg-gray-300/60 dark:bg-gray-500/60 backdrop-blur-md flex flex-wrap justify-between items-center px-4 rounded-full shadow-md fixed top-6 left-0 right-0 z-50 transition"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {/* Logo */}
      <Link href="/#home" passHref>
        <motion.a
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 cursor-pointer"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={48}
            height={48}
            className="w-13 h-13 object-contain"
          />
        </motion.a>
      </Link>

      {/* Links */}
      <motion.div className="flex items-center gap-6">
        <Link href="/#home" passHref>
          <motion.a
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-[11px] text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition"
          >
            HOME
          </motion.a>
        </Link>

        <Link href="/#projects" passHref>
          <motion.a
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-[11px] text-white dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition"
          >
            PROJECTS
          </motion.a>
        </Link>

        <Link href="/#experience" passHref>
          <motion.a
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-[11px] text-white dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition"
          >
            EXPERIENCE
          </motion.a>
        </Link>
      </motion.div>

      <SocialMediaButtons />

      {/* Dark theme button */}
      {mounted && (
        <Link href="#" passHref>
          <motion.button
            onClick={toggle}
            className="relative w-10 h-10 rounded-lg flex items-center justify-center transition"
            aria-label="Toggle theme"
            initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            whileTap={{ scale: 0.9, rotate: 15 }}
            whileHover={{ scale: 1.1 }}
          >
            {isDark ? (
              <Sun className="w-6 h-6 text-gray-400 hover:text-amber-300 transition-transform duration-300" />
            ) : (
              <Moon className="w-6 h-6 text-gray-400 hover:text-[#009ffb] transition-transform duration-300" />
            )}
          </motion.button>
        </Link>
      )}
    </motion.nav>
  );
}
