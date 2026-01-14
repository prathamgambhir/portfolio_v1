"use client";

import { skills } from "@/config/technologies";
import Image from "next/image";
import DottedTitle from "../common/dotted-tittle";
import {MotionDiv} from "../motion-div";

export default function Skills() {
  // Container variant for staggering the initial load
  const containerVars = {
    initial: { opacity: 0},
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1,
      },
    },
  };

  const itemVars = {
    initial: { opacity: 0, scale: 0.9, y: 10 , filter: "blur(10px)" },
    animate: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring" as const, stiffness: 300, damping: 20 } 
    },
  };

  return (
    <div className="px-4 py-7 pb-10 section-seprate flex flex-col">
      <DottedTitle>Tools & Technologies I Use</DottedTitle>
      
      <MotionDiv 
        variants={containerVars}
        initial="initial"
        whileInView="animate" // Animates when the section scrolls into view
        viewport={{ once: true }}
        className="flex flex-wrap gap-2"
      >
        {skills.map((skill, idx) => {
          return (
            <MotionDiv
              key={idx}
              variants={itemVars}
              
              // Drag logic
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.07} 
              whileDrag={{ scale: 1.1, zIndex: 10, cursor: "grabbing" }}
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              className="about-skill-span h-9 md:h-7.5 font-medium text-sm flex items-center gap-2 select-none active:cursor-grabbing cursor-grab"
            >
              <span className="pointer-events-none">
                <Image
                  src={`/icons/${skill.icon}`}
                  alt={skill.name}
                  width={20}
                  height={20}
                  className="dark:bg-neutral-100 dark:rounded-sm"
                />
              </span>
              <span className="pointer-events-none">{skill.name}</span>
            </MotionDiv>
          );
        })}
      </MotionDiv>
    </div>
  );
}