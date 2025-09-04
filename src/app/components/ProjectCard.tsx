"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { MdOpenInNew } from "react-icons/md";

interface ProjectType {
  id: number;
  title: string;
  start: string;
  end: string;
  description: string;
  tech: string[];
  git: string;
  link: string;
}

export default function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <motion.div
      className="rounded-xl shadow-lg shadow-[#009ffb]/20 border border-[#009ffb]/30 bg-white dark:bg-black p-5 flex flex-col justify-between"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{
        y: -6,
        boxShadow: "0px 6px 12px rgba(0, 159, 251, 0.4)",
      }}
    >
      <div>
        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
          {project.title}
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {project.start} – {project.end}
        </p>
        <p className="mt-3 text-xs text-gray-700 dark:text-gray-300">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tech.map((item, index) => (
            <span
              key={index}
              className="text-[11px] px-2 py-1 rounded-md text-gray-700 dark:text-gray-300 border border-[#009ffb] hover:bg-[#4d9292]/20 transition"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Link */}
      <div className="mt-4 flex justify-around items-center gap-2">
        <motion.a
          href={project.git}
          target="_blank"
          rel="noopener noreferrer"
          className=" text-xs flex justify-center items-center gap-2 w-1/2 bg-gray-900 dark:bg-gray-200 text-white dark:text-gray-900 dark:hover:bg-white py-2 px-4 rounded-2xl transform"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Github
          <FaGithub className="h-4 w-4 text-gray-500 dark:text-gray-400 fill-white dark:fill-black" />
        </motion.a>
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs flex justify-center items-center gap-2 w-1/2 bg-gray-900 dark:bg-gray-200 text-white dark:text-gray-900 dark:hover:bg-white py-2 px-4 rounded-2xl transform"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Website
          <MdOpenInNew className="h-4 w-4 text-gray-500 dark:text-gray-400 fill-white dark:fill-black" />
        </motion.a>
      </div>
    </motion.div>
  );
}
