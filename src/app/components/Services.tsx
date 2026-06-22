"use client";
import { motion } from "framer-motion";
import { services } from "../../data/services";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  return (
    <motion.section
      id="services"
      className="mb-16 pt-5 scroll-mt-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h2
        className="font-semibold text-[15px] text-text-primary mb-2 dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        WHAT I BUILD
      </motion.h2>
      <motion.p
        className="mb-6 text-xs text-gray-500 dark:text-gray-400"
        variants={item}
      >
        The revenue systems I build for agencies and SMBs, end to end.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        variants={containerVariants}
      >
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.id}
              variants={item}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-neutral-900 p-5 shadow-sm transition-colors duration-300 hover:border-[#009ffb]/40"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#009ffb]/10 text-[#009ffb]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 text-sm font-semibold text-gray-900 dark:text-gray-100">
                {service.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
};

export default Services;
