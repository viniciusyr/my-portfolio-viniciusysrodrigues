"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current || !projectsRef.current)
      return;

    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(projectsRef.current.children, {
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-start text-black dark:text-gray-100 py-15"
    >
      <h1
        ref={titleRef}
        className="text-2xl italic font-bold mb-12 text-gray-900 dark:text-gray-100"
      >
        Projects
      </h1>

      <div
        ref={projectsRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl"
      >
        {/* Projects */}
        <motion.div
          whileHover={{
            position: 0,
            y: -5,
            boxShadow: "-1px 2px 10px 1px #009ffb",
          }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-black p-6 rounded"
        >
          Project 1
        </motion.div>
        <motion.div
          whileHover={{
            position: 0,
            y: -5,
            boxShadow: "-1px 2px 10px 1px #009ffb",
          }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-black p-6 rounded"
        >
          Project 2
        </motion.div>
      </div>
    </section>
  );
}
