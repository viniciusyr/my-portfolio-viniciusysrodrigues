import { motion, Variants } from "framer-motion";

interface Experiences {
  id: number;
  company: string;
  title: string;
  start: string;
  end: string;
  description: string;
  link: string;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
    },
  },
};

const ExperienceCard = ({ experience }: { experience: Experiences }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="group relative border-l border-[#009ffb] pl-4"
    >

      <motion.div
        className="absolute -left-[5px] top-[6px] h-2 w-2 rounded-full bg-[#009ffb]"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: experience.id * 0.1, duration: 0.3 }}
      />

      <motion.div variants={contentVariants}>
        <motion.p
          className="text-sm text-text-secondary mb-1 text-gray-500 dark:text-gray-400 italic"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          {experience.start} - {experience.end}
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row justify-between md:items-center md:gap-2 mb-2"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <a
            href={experience.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-primary font-bold hover:underline text-black dark:text-white"
          >
            {experience.company}
          </a>

          <span className="text-sm text-text-primary text-black dark:text-white">
            {experience.title}
          </span>
        </motion.div>

        <motion.p
          className="text-text-secondary text-sm leading-relaxed text-gray-500 dark:text-gray-400"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: experience.id * 0.1 + 0.3,
              },
            },
          }}
        >
          {experience.description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceCard;
