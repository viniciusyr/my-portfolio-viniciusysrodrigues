"use client";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "../../data/experience";

const Experience = () => {
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
      id="experience"
      className="mb-14 scroll-mt-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h2
        className="font-semibold italic text-xl text-text-primary mb-6 text-black dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>

      <motion.div className="space-y-6">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Experience;