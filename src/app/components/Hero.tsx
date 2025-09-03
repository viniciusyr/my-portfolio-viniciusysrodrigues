"use client";

import { motion } from "framer-motion";
import { RoughNotation } from "react-rough-notation";
import AnimatedSpan from "./AnimatedSpan";
import SocialMediaButtons from "./SocialMediaButtons";
import SpecialButton from "./SpecialButton";
import Stacks from "@/app/components/Stacks";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-start justify-center text-black dark:text-gray-100"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-light mb-4 leading-[1.4] text-gray-900 dark:text-gray-100 relative"
      >
        From imagination to pixels, from passion to{" "}
        <span className="italic font-medium font-serif relative">bytes</span> —
        crafting digital experiences that{" "}
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
        className="text-lg md:text-xl font-light leading-6 text-gray-900 dark:text-gray-100 relative py-5"
      >
        As a Full Stack Developer, I specialize in building scalable and
        maintainable applications using technologies like{" "}
        <AnimatedSpan>Java</AnimatedSpan>,{" "}
        <AnimatedSpan>Spring Boot</AnimatedSpan>,{" "}
        <AnimatedSpan>Next.js</AnimatedSpan>, and{" "}
        <AnimatedSpan>TypeScript</AnimatedSpan>. With a strong foundation in
        both Backend and Frontend development, I focus on delivering seamless
        user experiences backed by reliable and efficient systems. Passionate
        about turning ideas into production-ready solutions, I combine technical
        expertise with problem-solving to create applications that truly add
        value.
      </motion.h4>

      <div className="flex justify-start gap-4 ">
        <SpecialButton
          svg={
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="0"
              viewBox="0 0 15 15"
              className="h-4 w-4 text-gray-200 dark:text-gray-900"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M7.50005 1.04999C7.74858 1.04999 7.95005 1.25146 7.95005 1.49999V8.41359L10.1819 6.18179C10.3576 6.00605 10.6425 6.00605 10.8182 6.18179C10.994 6.35753 10.994 6.64245 10.8182 6.81819L7.81825 9.81819C7.64251 9.99392 7.35759 9.99392 7.18185 9.81819L4.18185 6.81819C4.00611 6.64245 4.00611 6.35753 4.18185 6.18179C4.35759 6.00605 4.64251 6.00605 4.81825 6.18179L7.05005 8.41359V1.49999C7.05005 1.25146 7.25152 1.04999 7.50005 1.04999ZM2.5 10C2.77614 10 3 10.2239 3 10.5V12C3 12.5539 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V12C13 13.1041 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2239 2.22386 10 2.5 10Z"
                fill="currentColor"
              ></path>
            </svg>
          }
        >
          Resume
        </SpecialButton>
        <SocialMediaButtons />
      </div>
      <motion.div className="flex w-full justify-start">
        <Stacks />
      </motion.div>
    </section>
  );
}
