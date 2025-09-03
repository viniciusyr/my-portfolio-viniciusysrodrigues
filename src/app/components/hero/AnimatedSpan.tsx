"use client";

import { motion } from "framer-motion";

export default function AnimatedSpan({ children }: { children: React.ReactNode }) {
    return (
        <motion.span
            transition={{ duration: 0.1 }}
            className="inline-block font-bold dark:text-white"
        >
            {children}
        </motion.span>
    )
}