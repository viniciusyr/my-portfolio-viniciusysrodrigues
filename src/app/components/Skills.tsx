"use client";
import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";
import Stacks from "./Stacks";
import GrowthStacks from "./GrowthStacks";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="mb-14 pt-5 scroll-mt-24"
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
        SKILLS
      </motion.h2>

      <motion.div className="space-y-8" variants={containerVariants}>
        {skillGroups.map((group) => (
          <motion.div key={group.id} variants={item}>
            <div className="flex flex-col mb-3">
              <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                {group.label}
                {group.lead && (
                  <span className="ml-2 align-middle text-[10px] font-medium uppercase tracking-wide text-[#009ffb]">
                    Primary focus
                  </span>
                )}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {group.caption}
              </span>
            </div>

            <motion.ul
              className="flex flex-wrap gap-2"
              variants={containerVariants}
            >
              {group.skills.map((skill) => (
                <motion.li key={skill.name} variants={item}>
                  <span
                    className={
                      skill.featured
                        ? "text-[11px] px-2 py-1 rounded-md font-semibold text-white bg-[#009ffb] border border-[#009ffb] transition"
                        : group.lead
                        ? "text-[11px] px-2 py-1 rounded-md text-gray-800 dark:text-gray-200 bg-[#009ffb]/10 border border-[#009ffb] hover:bg-[#009ffb]/20 transition"
                        : "text-[11px] px-2 py-1 rounded-md text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-[#4d9292]/20 transition"
                    }
                  >
                    {skill.name}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Each group gets its matching tool-icon row */}
            {group.lead ? <GrowthStacks /> : <Stacks />}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
