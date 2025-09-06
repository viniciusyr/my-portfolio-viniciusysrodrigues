import Image from "next/image";
import { motion } from "framer-motion";

export default function ProfileCard() {
  return (
    <motion.div
      className="pt-20 flex flex-col items-center text-center gap-4"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.15 },
        },
      }}
    >
      <motion.a
        href="/"
        className="cursor-pointer"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
        }}
      >
        <Image
          src="/vinicius.png"
          alt="Foto de perfil"
          width={150}
          height={150}
          className="h-28 w-28 rounded-full shadow-[0px_0px_15px_#009ffb]"
        />
      </motion.a>

      <motion.div
        className="flex flex-col items-center"
        variants={{
          hidden: { opacity: 0, y: -10 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
        }}
      >
        <motion.p className="text-gray-900 dark:text-gray-100 font-bold text-lg">
          Vinicius Rodrigues 🇧🇷
        </motion.p>
        <motion.p className="text-gray-500 dark:text-gray-300 font-normal text-sm">
          Software Engineer | Fullstack Developer
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
