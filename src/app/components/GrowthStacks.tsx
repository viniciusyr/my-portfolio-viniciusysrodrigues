"use client";
import { motion } from "framer-motion";
import {
  SiWordpress,
  SiZapier,
  SiN8N,
  SiMeta,
  SiGoogleads,
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiSalesforce,
  SiHubspot,
  SiClaude,
} from "react-icons/si";

const container = {
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

const tooltip =
  "absolute bottom-[-35px] left-1/2 -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-10";

export default function GrowthStacks() {
  return (
    <motion.div
      className="pt-4 text-gray-500 justify-center flex flex-row"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={container}
    >
      <motion.ul
        className="list-image-none flex flex-row gap-2 ml-4 flex-wrap"
        variants={container}
      >
        {/* GoHighLevel: lead specialization (no brand icon in react-icons, custom mark) */}
        <motion.li className="group relative inline-block" variants={item}>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="w-6 h-6 mt-0.5 text-gray-500 hover:text-teal-500 transition-colors duration-300"
          >
            <rect
              x="1.5"
              y="1.5"
              width="21"
              height="21"
              rx="5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <text
              x="12"
              y="15.7"
              textAnchor="middle"
              fontSize="8.5"
              fontWeight="700"
              fill="currentColor"
              fontFamily="ui-sans-serif, system-ui, sans-serif"
            >
              HL
            </text>
          </svg>
          <span className={tooltip}>GoHighLevel</span>
        </motion.li>

        {/* WordPress */}
        <motion.li className="group relative inline-block" variants={item}>
          <SiWordpress className="w-6 h-6 fill-gray-500 hover:fill-blue-600 transition-colors duration-300 mt-0.5" />
          <span className={tooltip}>WordPress</span>
        </motion.li>

        {/* Zapier */}
        <motion.li className="group relative inline-block" variants={item}>
          <SiZapier className="w-6 h-6 fill-gray-500 hover:fill-orange-500 transition-colors duration-300 mt-0.5" />
          <span className={tooltip}>Zapier</span>
        </motion.li>

        {/* n8n */}
        <motion.li className="group relative inline-block" variants={item}>
          <SiN8N className="w-6 h-6 fill-gray-500 hover:fill-[#EA4B71] transition-colors duration-300 mt-0.5" />
          <span className={tooltip}>n8n</span>
        </motion.li>

        {/* Meta Ads */}
        <motion.li className="group relative inline-block" variants={item}>
          <SiMeta className="w-6 h-6 fill-gray-500 hover:fill-blue-500 transition-colors duration-300 mt-0.5" />
          <span className={tooltip}>Meta Ads</span>
        </motion.li>

        {/* Google Ads */}
        <motion.li className="group relative inline-block" variants={item}>
          <SiGoogleads className="w-6 h-6 fill-gray-500 hover:fill-blue-500 transition-colors duration-300 mt-0.5" />
          <span className={tooltip}>Google Ads</span>
        </motion.li>

        {/* Google Analytics (GA4) */}
        <motion.li className="group relative inline-block" variants={item}>
          <SiGoogleanalytics className="w-6 h-6 fill-gray-500 hover:fill-orange-500 transition-colors duration-300 mt-0.5" />
          <span className={tooltip}>Google Analytics</span>
        </motion.li>

        {/* Google Tag Manager */}
        <motion.li className="group relative inline-block" variants={item}>
          <SiGoogletagmanager className="w-6 h-6 fill-gray-500 hover:fill-blue-500 transition-colors duration-300 mt-0.5" />
          <span className={tooltip}>Google Tag Manager</span>
        </motion.li>

        {/* Salesforce */}
        <motion.li className="group relative inline-block" variants={item}>
          <SiSalesforce className="w-6 h-6 fill-gray-500 hover:fill-sky-500 transition-colors duration-300 mt-0.5" />
          <span className={tooltip}>Salesforce</span>
        </motion.li>

        {/* HubSpot */}
        <motion.li className="group relative inline-block" variants={item}>
          <SiHubspot className="w-6 h-6 fill-gray-500 hover:fill-[#FF7A59] transition-colors duration-300 mt-0.5" />
          <span className={tooltip}>HubSpot</span>
        </motion.li>

        {/* Applied AI: Claude */}
        <motion.li className="group relative inline-block" variants={item}>
          <SiClaude className="w-6 h-6 fill-gray-500 hover:fill-orange-600 transition-colors duration-300 mt-0.5" />
          <span className={tooltip}>Claude / Applied AI</span>
        </motion.li>
      </motion.ul>
    </motion.div>
  );
}
