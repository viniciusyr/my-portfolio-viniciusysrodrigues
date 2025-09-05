"use client";

import Image from "next/image";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useDarkMode } from "@/hooks/useDarkMode";
import { motion } from "framer-motion";

export default function Navbar() {
  const { isDark, toggle } = useDarkMode();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <motion.nav
      className="pt-10 flex justify-between items-center mb-16"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >

      <motion.div
        className="flex items-center gap-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        <motion.a
          href="/"
          className="cursor-pointer"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
          }}
        >
          <Image
            src="/vinicius.png"
            alt="Logo"
            width={48}
            height={48}
            className="h-12 w-12 rounded-full shadow-[0px_0px_10px_#009ffb]"
          />
        </motion.a>

        <motion.div
          className="flex flex-col"
          variants={{
            hidden: { opacity: 0, x: -10 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
          }}
        >
          <motion.p className="text-gray-900 dark:text-gray-100 font-bold text-md">
            Vinicius Rodrigues 🇧🇷
          </motion.p>
          <motion.p className="text-gray-500 dark:text-gray-300 font-normal text-sm">
            Software Engineer | Fullstack Developer
          </motion.p>
        </motion.div>
      </motion.div>


      {/* Dark theme button */}
      {mounted && (
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
      )}
    </motion.nav>
  );
}
