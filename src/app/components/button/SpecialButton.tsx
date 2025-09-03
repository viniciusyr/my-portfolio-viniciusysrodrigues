"use client";

import { motion } from "framer-motion";

interface SpecialButtonProps {
  children: React.ReactNode;
  svg?: React.ReactNode;
}

export default function SpecialButton({ children, svg }: SpecialButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ cursor: "pointer", scale: 1.05 }}
      className="bg-gray-900 dark:bg-gray-200 text-white dark:text-gray-900 dark:hover:bg-white py-2 px-4 rounded-2xl flex items-center gap-2 transform"
    >
      <a href="#" className="flex items-center gap-2">
        {children}
        {svg && <span>{svg}</span>}
      </a>
    </motion.button>
  );
}
