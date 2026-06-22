"use client";

import { motion } from "framer-motion";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import AnimatedSpan from "./AnimatedSpan";
import SpecialButton from "./SpecialButton";
import ProfileCard from "./ProfileCard";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-32 flex flex-col items-start justify-center text-black dark:text-gray-100 max-w-3xl mx-auto"
    >
      {/* === Headline === */}
      <RoughNotationGroup show>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl w-full font-light leading-snug text-gray-900 dark:text-gray-100 mb-10"
        >
          I build the systems that turn{" "}
          <span className="relative inline-block dark:text-black">
            <RoughNotation
              type="highlight"
              color="#F8FF6D"
              animationDuration={1200}
              strokeWidth={1}
            >
              <span>marketing</span>
            </RoughNotation>
          </span>{" "}
          into{" "}
          <span className="relative inline-block">
            <RoughNotation
              type="box"
              color="#80f975"
              animationDuration={1200}
              strokeWidth={3}
            >
              <span>revenue</span>
            </RoughNotation>
          </span>{" "}
          for agencies &amp;{" "}
          <span className="relative inline-block">
            <RoughNotation
              type="underline"
              color="#009ffb"
              animationDuration={800}
              strokeWidth={3}
            >
              <span className="font-bold">SMBs.</span>
            </RoughNotation>
          </span>
        </motion.h1>
      </RoughNotationGroup>

      {/*  Profile Card  */}
      <div className="w-full flex flex-col justify-center mb-8">
        <ProfileCard />
      </div>

      {/*  Short Bio  */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-md font-light leading-7 text-gray-700 dark:text-gray-100 text-justify mb-8"
      >
        I’m a software engineer who builds the{" "}
        <AnimatedSpan>revenue systems</AnimatedSpan> that small businesses and
        marketing agencies need, but rarely find in one person. I combine real{" "}
        <AnimatedSpan>full-stack development</AnimatedSpan> (
        <AnimatedSpan>Java</AnimatedSpan>,{" "}
        <AnimatedSpan>TypeScript</AnimatedSpan>,{" "}
        <AnimatedSpan>cloud</AnimatedSpan>) with hands-on{" "}
        <AnimatedSpan>marketing and paid-traffic</AnimatedSpan> experience, so I
        can build a custom <AnimatedSpan>CRM automation</AnimatedSpan>, wire up
        the tracking, plug <AnimatedSpan>AI</AnimatedSpan> into the funnel, and
        tie it all to a business outcome. I’ve scaled marketing departments from
        a handful of people to over a hundred, run Meta and Google Ads campaigns
        with measurable results, and shipped web and automation systems for
        international clients. I don’t just write code. I build things that{" "}
        <AnimatedSpan>move the number the client cares about</AnimatedSpan>.
      </motion.p>

      {/*  Actions  */}
      <div className="w-full flex flex-row justify-center items-center gap-4 mb-10">
        <SpecialButton
          svg={
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="0"
              viewBox="0 0 15 15"
              className="h-4 w-4 text-gray-200 dark:text-gray-900"
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

        <motion.span className="flex items-center gap-2 text-sm font-medium rounded-2xl py-2 px-4 bg-green-200 text-green-700 dark:text-gray-900 hover:text-gray-900 dark:hover:text-white transition">
          <motion.div
            className="w-3 h-3 rounded-full bg-green-500"
            animate={{ opacity: [1, 0.4, 1], scale: [1, 0.8, 1] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
          />
          Available for collaborations
        </motion.span>
      </div>
    </section>
  );
}
