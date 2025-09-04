"use client";

import { useEffect, useRef } from "react";
import { articles } from "../../data/articles";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Articles = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelector("h2"),
      { opacity: 0, y: 40, filter: "blur(6px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );

    gsap.fromTo(
      itemsRef.current,
      { opacity: 0, y: 30, x: -20, rotate: -2 },
      {
        opacity: 1,
        y: 0,
        x: 0,
        rotate: 0,
        duration: 0.7,
        ease: "back.out(1.7)",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="mb-14">
      <h2 className="font-semibold italic text-xl text-text-primary mb-6">
        Articles
      </h2>

      <ul className="flex flex-col space-y-6 border-gray-300 dark:border-gray-700">
        {articles.map((article, index) => (
          <li
            key={article.id}
            ref={(el) => {
              if (el) itemsRef.current[index] = el;
            }}
            className="relative group cursor-pointer"
          >
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <h3 className="text-lg font-semibold text-text-primary group-hover:text-[#009ffb] transition-colors duration-300">
                {article.title}
              </h3>
              <p className="text-xs text-text-secondary">{article.date}</p>
              <p className="text-sm text-text-secondary mt-1 leading-relaxed">
                {article.description}
              </p>
            </a>

            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#009ffb] transition-all duration-500 group-hover:w-full"></span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Articles;
