import { skills } from "@/config/technologies";
import Image from "next/image";
import DottedTitle from "../common/dotted-tittle";
import { MotionDiv, MotionSpan } from "../motion-div";
import { CurvedArrow } from "../svgs/curved-arrow";

export default function Skills() {
  // Container variant for staggering the initial load
  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1,
      },
    },
  };

  const itemVars = {
    initial: { opacity: 0, scale: 1.05, filter: "blur(10px)" },
    animate: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { type: "spring" as const, stiffness: 300, damping: 20 },
    },
  };

  return (
    <div className="section-seprate flex flex-col px-4 py-7 pb-10">
      <DottedTitle>Tools & Technologies I Use</DottedTitle>

      <MotionDiv
        variants={containerVars}
        initial="initial"
        whileInView="animate" // Animates when the section scrolls into view
        viewport={{ once: true }}
        className="relative flex flex-wrap gap-2"
      >
        <MotionDiv
          className="absolute -top-22 md:-top-24 right-2 md:right-6 flex  items-center "
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <MotionSpan animate={{ y: [5, 0, -5, 0, 5] }}
           transition={{ duration: 4, repeat: Infinity }}
           className="font-handwriting translate-y-4 -rotate-12 text-sm text-neutral-500">
            Drag me
          </MotionSpan>
          <div className="translate-y-8 ">
            <CurvedArrow />
          </div>
        </MotionDiv>
        {skills.map((skill, idx) => {
          return (
            <MotionDiv
              key={idx}
              variants={itemVars}
              // Drag logic
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.25} // Increased slightly so it's easier to pull initially
              dragTransition={{
                bounceStiffness: 1000, // High stiffness for a fast start
                bounceDamping: 25, // Higher damping to prevent over-oscillating (removes the "floaty" feel)
              }}
              whileDrag={{
                scale: 1.05,
                zIndex: 50,
                cursor: "grabbing",
              }}
              whileHover={{ y: -2 }}
              className="about-skill-span flex h-9 cursor-grab items-center gap-2 text-sm font-medium select-none active:cursor-grabbing md:h-7.5"
            >
              <span className="pointer-events-none">
                <Image
                  src={`/icons/${skill.icon}`}
                  alt={skill.name}
                  width={20}
                  height={20}
                  className="dark:rounded-sm dark:bg-neutral-100"
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
