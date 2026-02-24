"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SpecialButtonProps {
  children: React.ReactNode;
  svg?: React.ReactNode;
}

const BR_LINK = process.env.NEXT_PUBLIC_LINK_BR ?? "";
const GLOBAL_LINK = process.env.NEXT_PUBLIC_LINK_GLOBAL ?? "";

export default function SpecialButton({ children, svg }: SpecialButtonProps) {
  const [resumeLink, setResumeLink] = useState(GLOBAL_LINK);

  useEffect(() => {
    const match = document.cookie.match(/user-country=([^;]+)/);
    const country = match ? match[1] : "UNKNOWN";

    if (country === "BR") {
      setResumeLink(BR_LINK);
    } else {
      setResumeLink(GLOBAL_LINK);
    }
  }, []);
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ cursor: "pointer", scale: 1.05 }}
      className="bg-gray-900 dark:bg-gray-200 text-white dark:text-gray-900 dark:hover:bg-white py-2 px-4 rounded-2xl flex items-center gap-2 transform"
    >
      <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
        {children}
        {svg && <span>{svg}</span>}
      </a>
      
    </motion.button>
  );
}
