"use client";

import { motion } from "framer-motion";
import parse, { domToReact, DOMNode, Element } from "html-react-parser";
import { AboutVariants } from "../../data/about";
import AnimatedSpan from "../components/AnimatedSpan";

export default function About() {
  return (
    <section id="about" className="max-w-3xl mx-auto py-5">
      {AboutVariants.map((item, index) => (
        <motion.h4
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="text-md font-light leading-6 text-gray-700 dark:text-gray-100 relative py-5 text-justify"
        >
          {parse(item.text, {
            replace: (domNode: DOMNode) => {
              if (
                domNode.type === "tag" &&
                (domNode as Element).name.toLowerCase() === "animatedspan"
              ) {
                return (
                  <AnimatedSpan>
                    {domToReact((domNode as Element).children as DOMNode[])}
                  </AnimatedSpan>
                );
              }
            },
          })}
        </motion.h4>
      ))}
    </section>
  );
}
