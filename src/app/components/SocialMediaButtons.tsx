"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function SocialMediaButtons() {
  return (
    <motion.div
      className="flex justify-start space-x-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Email */}
      <motion.a
        href="mailto:viniciusysrodrigues@gmail.com"
        className="flex items-center justify-center"
        whileHover={{
          scale: 1.15,
          rotate: 8,
        }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
        aria-label="Email"
      >
        <FaEnvelope className="w-6 h-6 fill-gray-800 dark:fill-gray-100" />
      </motion.a>

      {/* GitHub */}
      <motion.a
        href="https://github.com/viniciusyr/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center"
        whileHover={{
          scale: 1.15,
          rotate: -8,
        }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
        aria-label="GitHub"
      >
        <FaGithub className="w-6 h-6 fill-gray-800 dark:fill-gray-100" />
      </motion.a>

      {/* LinkedIn */}
      <motion.a
        href="https://www.linkedin.com/in/viniciusysrodrigues/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center"
        whileHover={{
          scale: 1.15,
          rotate: 8,
        }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
        aria-label="LinkedIn"
      >
        <FaLinkedin className="w-6 h-6 fill-gray-800 dark:fill-gray-100" />
      </motion.a>
    </motion.div>
  );
}
