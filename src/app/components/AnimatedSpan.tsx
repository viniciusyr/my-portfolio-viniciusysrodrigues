"use client";

import { motion } from "framer-motion";

export default function AnimatedSpan({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      className="font-semibold text-dark dark:text-white"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
    </motion.span>
  );
}
