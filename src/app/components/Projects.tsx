"use client";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";


export default function Projects() {
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
      className="mb-14 pt-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h2
        className="font-semibold text-xl text-text-primary mb-6 text-black dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-1 gap-6"
        variants={containerVariants}
      >
        {projects.reverse().map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </motion.section>
  );
};
