'use client';

import { motion } from 'framer-motion';
import { RoughNotation } from "react-rough-notation";
import AnimatedSpan from './AnimatedSpan';
import SocialMediaButtons from './SocialMediaButtons';

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center text-black dark:text-gray-100"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-light leading-[1.4] text-gray-900 dark:text-gray-100 relative"
      >
        From imagination to pixels, from passion to{' '}
        <span className="italic font-medium font-serif relative">
          bytes
        </span>{' '}
        — crafting digital experiences that{' '}
        <span className="relative inline-block">
          <RoughNotation
            type="underline"
            show={true}
            color="#009ffb"
            animationDuration={800}
            strokeWidth={3}
          >
            <span className="font-medium">matter.</span>
          </RoughNotation>
        </span>
      </motion.h1>
      <motion.h4
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-lg md:text-xl font-light leading-[1.4] text-gray-900 dark:text-gray-100 relative py-5"
      >
        As a Full Stack Developer, I specialize in building scalable and maintainable applications using technologies like <AnimatedSpan>Java</AnimatedSpan>, <AnimatedSpan>Spring Boot</AnimatedSpan>, <AnimatedSpan>Next.js</AnimatedSpan>, and <AnimatedSpan>TypeScript</AnimatedSpan>. With a strong foundation in both Backend and Frontend development, I focus on delivering seamless user experiences backed by reliable and efficient systems. Passionate about turning ideas into production-ready solutions, I combine technical expertise with problem-solving to create applications that truly add value.
      </motion.h4>

      <SocialMediaButtons />
    </section>
  );
}
