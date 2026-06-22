"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { caseStudies, labsEntry, CaseStudy } from "@/data/caseStudies";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const rowVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

/** A labelled block in the expanded STAR view (Problem / Built / Result). */
function Movement({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-wide text-[#009ffb]">
        {label}
      </p>
      <div className="mt-1.5 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
        {children}
      </div>
    </div>
  );
}

function CaseRow({ study }: { study: CaseStudy }) {
  const [open, setOpen] = useState(false);

  const builtIsList = study.built.length > 1 || !!study.workflows;

  return (
    <motion.div
      variants={rowVariants}
      className="border-t border-gray-200 dark:border-white/10"
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="group flex w-full items-start justify-between gap-4 py-6 text-left"
      >
        {/* Left: eyebrow, headline, teaser */}
        <div className="min-w-0">
          <p className="text-[10px] uppercase tracking-wide text-gray-400 dark:text-gray-500">
            {study.eyebrow}
          </p>
          <h3 className="mt-2 text-sm font-semibold leading-snug text-gray-900 dark:text-white transition-colors group-hover:text-[#009ffb]">
            {study.headline}
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
            {study.teaser}
          </p>
        </div>

        {/* Right: metric + toggle */}
        <div className="flex shrink-0 flex-col items-end text-right">
          <span className="text-sm font-semibold text-[#009ffb] whitespace-nowrap">
            {study.metricValue}
          </span>
          <span className="text-[11px] text-gray-400 dark:text-gray-500 whitespace-nowrap">
            {study.metricLabel}
          </span>
          <motion.span
            aria-hidden
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className="mt-3 flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 dark:border-white/20 text-base leading-none text-gray-400 transition-colors group-hover:border-[#009ffb] group-hover:text-[#009ffb]"
          >
            +
          </motion.span>
        </div>
      </button>

      {/* Expanded STAR / XYZ detail */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="max-w-2xl space-y-5 pb-8">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {study.client} · {study.role}
              </p>

              <Movement label="Problem">{study.problem}</Movement>

              <Movement label="Built">
                {builtIsList ? (
                  <ul className="space-y-1.5">
                    {study.built.map((point, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="select-none text-[#009ffb]">›</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>{study.built[0]}</p>
                )}

                {study.workflows && (
                  <ol className="mt-2 ml-4 list-decimal space-y-1.5">
                    {study.workflows.map((wf, i) => (
                      <li key={i} className="pl-1">
                        <span className="font-semibold text-gray-900 dark:text-gray-100">
                          {wf.title}
                        </span>{" "}
                        {wf.detail}
                      </li>
                    ))}
                  </ol>
                )}

                {study.builtClosing && <p className="mt-2">{study.builtClosing}</p>}
              </Movement>

              <Movement label="Result">
                {study.result}
                {study.proof && (
                  <p className="mt-2 text-[11px] italic text-gray-500 dark:text-gray-400">
                    {study.proof}
                  </p>
                )}
              </Movement>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {study.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-gray-100 dark:bg-white/5 px-2.5 py-1 text-[11px] text-gray-600 dark:text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/** Section header matching the rest of the page (e.g. "SKILLS", "EXPERIENCE"). */
function SectionHeader({ title }: { title: string }) {
  return (
    <motion.h2
      className="font-semibold text-[15px] text-text-primary mb-2 dark:text-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {title}
    </motion.h2>
  );
}

export default function SelectedWork() {
  return (
    <motion.section
      id="work"
      className="mb-16 pt-5 scroll-mt-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <SectionHeader title="SELECTED WORK" />
      <motion.p
        className="mb-6 text-xs text-gray-500 dark:text-gray-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Revenue systems I&apos;ve built for agencies and SMBs. Tap any one to
        open the full story.
      </motion.p>

      <motion.div
        className="border-b border-gray-200 dark:border-white/10"
        variants={containerVariants}
      >
        {caseStudies.map((study) => (
          <CaseRow key={study.id} study={study} />
        ))}
      </motion.div>

      {/* Side projects & Labs — secondary */}
      <div className="mt-14">
        <SectionHeader title="SIDE PROJECTS &amp; LABS" />
        <motion.p
          className="mb-6 text-xs text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Personal builds and R&amp;D where I sharpen the engineering craft
          behind the systems above.
        </motion.p>

        <motion.div className="grid grid-cols-1 gap-6" variants={containerVariants}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

          <motion.article
            className="rounded-2xl border border-dashed border-gray-300 dark:border-white/15 bg-white dark:bg-neutral-900 p-5 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className="flex items-center justify-between gap-2">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                {labsEntry.title}
              </h4>
              <span className="whitespace-nowrap text-[10px] font-medium uppercase tracking-wide text-[#009ffb]">
                {labsEntry.status}
              </span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-gray-700 dark:text-gray-300">
              {labsEntry.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {labsEntry.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-gray-100 dark:bg-white/5 px-2.5 py-1 text-[11px] text-gray-600 dark:text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.article>
        </motion.div>
      </div>
    </motion.section>
  );
}
