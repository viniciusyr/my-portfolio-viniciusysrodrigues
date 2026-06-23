"use client";

import { motion } from "framer-motion";

interface SpecialButtonProps {
  children: React.ReactNode;
  svg?: React.ReactNode;
}

export default function SpecialButton({ children, svg }: SpecialButtonProps) {
  return (
    <motion.a
      href="/resume"
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      className="bg-gray-900 dark:bg-gray-200 text-white dark:text-gray-900 dark:hover:bg-white py-2 px-4 rounded-2xl flex items-center gap-2 transform cursor-pointer"
    >
      {children}
      {svg && <span>{svg}</span>}
    </motion.a>
  );
}
