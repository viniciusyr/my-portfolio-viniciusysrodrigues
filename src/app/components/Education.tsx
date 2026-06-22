"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { education } from "../../data/education";

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.section
      id="education"
      className="mb-14 scroll-mt-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h2
        className="font-semibold text-[15px] text-text-primary mb-6 dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        EDUCATION
      </motion.h2>

      <motion.div className="space-y-6">
        {education.map((edu) => (
          <motion.div
            key={edu.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            className="flex items-center gap-4"
          >
            <motion.div
              className="w-12 h-12 shrink-0 rounded-lg border border-gray-400 dark:border-gray-500 overflow-hidden bg-white flex items-center justify-center p-2"
              whileHover={{
                scale: 1.1,
                rotate: 5,
                y: -6,
                boxShadow: "0px 6px 12px rgba(0, 159, 251, 0.4)",
              }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={edu.logo}
                alt={edu.institution}
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </motion.div>

            <div className="flex w-full flex-col">
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                {edu.start} - {edu.end}
                {edu.location ? ` · ${edu.location}` : ""}
              </p>
              <a
                href={edu.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit font-bold text-black dark:text-white hover:underline"
              >
                {edu.institution}
              </a>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {edu.degree}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Education;
