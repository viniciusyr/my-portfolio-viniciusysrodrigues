import { motion, Variants } from "framer-motion";
import Image from "next/image";

interface Experiences {
  id: number;
  company: string;
  title: string;
  start: string;
  end: string;
  description: string;
  link: string;
  logo: string;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
};

const ExperienceCard = ({ experience }: { experience: Experiences }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="group relative"
    >

      <motion.div
        className="flex items-center gap-4 mb-2 relative"
        variants={contentVariants}
      >
     
        <motion.div
          className="w-12 h-12 rounded-lg overflow-hidden bg-white flex items-center justify-center"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          whileHover={{
            scale: 1.1,
            rotate: 5,
            y: -6,
            boxShadow: "0px 6px 12px rgba(0, 159, 251, 0.4)",
          }}
          transition={{ delay: experience.id * 0.1, duration: 0.4 }}
        >
          <Image
            src={experience.logo}
            alt={experience.company}
            width={48} 
            height={48} 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="flex flex-col w-full">
          <motion.p
            className="text-sm text-gray-500 dark:text-gray-400 italic"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            {experience.start} - {experience.end}
          </motion.p>

          <motion.div className="flex justify-between items-center w-full">
            <a
              href={experience.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:text-white font-bold hover:underline"
            >
              {experience.company}
            </a>
            <span className="text-black dark:text-white text-sm">
              {experience.title}
            </span>
          </motion.div>
        </div>
      </motion.div>

      <motion.p
        className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed ml-16"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: experience.id * 0.1 + 0.3 },
          },
        }}
      >
        {experience.description}
      </motion.p>
    </motion.div>
  );
};

export default ExperienceCard;
