"use client";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="mb-16 pt-5 scroll-mt-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="font-semibold text-[15px] text-text-primary mb-2 dark:text-white">
        LET&apos;S TALK
      </h2>
      <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
        Have a marketing-to-revenue system that should be running for you? I
        build it end to end, from architecture to launch.
      </p>
      <div className="flex flex-wrap items-center gap-4 text-sm">
        <a
          href="mailto:viniciusysrodrigues@gmail.com"
          className="font-medium text-[#009ffb] hover:underline"
        >
          Let&apos;s talk →
        </a>
        <a
          href="https://www.linkedin.com/in/viniciusysrodrigues/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 dark:text-gray-400 transition hover:text-[#009ffb]"
        >
          or connect on LinkedIn
        </a>
      </div>
    </motion.section>
  );
};

export default Contact;
