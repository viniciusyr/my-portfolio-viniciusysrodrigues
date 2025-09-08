"use client";

import Image from "next/image";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useDarkMode } from "@/hooks/useDarkMode";
import { motion, Variants } from "framer-motion";
import { socials } from "../../data/socials";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const socialVariants: Variants = {
  hidden: { scale: 0 },
  visible: (i: number) => ({
    scale: 1,
    transition: {
      delay: i * 0.2,
      type: "spring",
      stiffness: 80,
    },
  }),
};

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
      <Link href="/#home">
        <motion.div
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
            className="w-12 h-12 object-contain"
          />
        </motion.div>
      </Link>

      {/* Links */}
      <motion.div className="flex items-center gap-6">
        <Link href="/#home">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-[11px] text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition cursor-pointer"
          >
            HOME
          </motion.span>
        </Link>

        <Link href="/#projects">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-[11px] text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition cursor-pointer"
          >
            PROJECTS
          </motion.span>
        </Link>

        <Link href="/#experience">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-[11px] text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition cursor-pointer"
          >
            EXPERIENCE
          </motion.span>
        </Link>
      </motion.div>

      {/* Socials */}
      <motion.div
        className="flex items-center gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors duration-200 text-gray-500 dark:text-gray-400"
              aria-label={social.name}
              variants={socialVariants}
              custom={index}
              whileHover={{
                scale: 1.2,
                rotate: [0, -10, 10, -10, 0],
                transition: {
                  duration: 0.3,
                  rotate: {
                    repeat: 0,
                    duration: 0.5,
                  },
                },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon className="h-5 w-5" />
            </motion.a>
          );
        })}
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
