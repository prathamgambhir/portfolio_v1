"use client";

import Image from "next/image";
import DottedTitle from "../common/dotted-tittle";
import GreenPing from "../common/green-ping";
import { ChevronDown } from "lucide-react";
import { experienceData } from "@/config/experience";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MotionDiv from "../motion-div";

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="section-seprate flex flex-col px-4 py-7 pb-10">
      <DottedTitle>Experience</DottedTitle>
      <div className="flex flex-col gap-4">
        {experienceData.map((experience, index) => {
          const isOpen = expandedIndex === index;

          return (
            <MotionDiv
              layout // Automatically animates size changes
              key={index}
              initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white/50 px-5 py-5 dark:border-neutral-800 dark:bg-neutral-900/50"
            >
              <div
                className="flex w-full items-center justify-between"
                onClick={() => toggleOpen(index)}
              >
                {/* left box */}
                <div className="flex items-center gap-3">
                  <div className="size-10 overflow-hidden rounded-md bg-black">
                    <Image
                      src={`/upwork-icon.jpeg`}
                      alt={experience.company}
                      width={40}
                      height={40}
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col tracking-tighter">
                    <div className="flex items-center gap-2 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                      {experience.company}
                      {experience.current && (
                        <div className="green-bg flex items-center gap-2 py-0 text-[11px] font-medium">
                          <GreenPing />
                          Current
                        </div>
                      )}
                    </div>
                    <div className="text-[11px] font-light text-neutral-500 dark:text-neutral-400">
                      {experience.designation}
                    </div>
                  </div>
                </div>

                {/* right box */}
                <div className="flex items-center gap-4 md:gap-8">
                  <div className="flex flex-col text-xs tracking-tighter">
                    <div className="max-w-30 text-right text-sm font-medium text-neutral-900 dark:text-neutral-100">
                      {experience.start}{" "}
                      {experience.end ? `— ${experience.end}` : ""}
                    </div>
                    <div className="self-end text-[11px] font-light text-neutral-500 dark:text-neutral-400">
                      {experience.region}
                    </div>
                  </div>
                  <MotionDiv
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="cursor-pointer rounded-full border border-neutral-300 p-0.5 transition-colors hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-800"
                  >
                    <ChevronDown className="size-3" />
                  </MotionDiv>
                </div>
              </div>

              {/* Expanded Description */}
              <AnimatePresence>
                {isOpen && (
                  <MotionDiv
                    initial={{ height: 0, opacity: 0, filter: "blur(10px)" }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      filter: "blur(0px)",
                    }}
                    exit={{ height: 0, opacity: 0, filter: "blur(10px)" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="mt-8 flex flex-col gap-3 border-t border-neutral-100 pt-6 dark:border-neutral-800">
                      {experience.description.map((point, i) => (
                        <MotionDiv
                          key={i}
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-2 text-xs font-medium text-neutral-700 md:text-sm dark:text-neutral-300"
                        >
                          <span className="mt-1 text-neutral-400">•</span>
                          <div>{point}</div>
                        </MotionDiv>
                      ))}
                    </div>
                  </MotionDiv>
                )}
              </AnimatePresence>
            </MotionDiv>
          );
        })}
      </div>
    </div>
  );
}
