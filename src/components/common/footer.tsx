import { CopyrightIcon, Eye, Heart } from "lucide-react";
import Container from "./container";
import { MotionDiv, MotionSpan } from "../motion-div";
import { containerVariants, itemVariants } from "@/lib/stagger-animate";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <Container className="mask-b-from-98%">
      <MotionDiv
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="px-6 md:px-10 py-20 flex flex-col items-center justify-evenly gap-20 md:gap-28 section-seprate"
      >
        {/* Geeta quote */}
        <MotionDiv
          variants={itemVariants}
          whileHover={{ y: -5 }}
          className="relative max-w-2xl w-full mx-auto border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/30 rounded-3xl px-6 py-5 md:px-9 md:py-7 overflow-hidden shadow-sm dark:shadow-none"
        >
          {/* Background Quote Icon Animation */}
          <MotionSpan
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.5, 0.8, 0.5] 
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1 md:top-2 left-2 text-neutral-200 dark:text-neutral-800 select-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="size-20 md:size-24"
              viewBox="0 0 16 16"
            >
              <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
            </svg>
          </MotionSpan>

          <div className="relative z-10 selection:bg-neutral-300 flex flex-col gap-4 tracking-tight">
            <div className="text-neutral-800 dark:text-neutral-400 italic text-sm md:text-lg text-center md:leading-relaxed font-medium">
              "Man is made by his belief. As he believes,<br /> so he is."
            </div>
            <div className="text-neutral-500 dark:text-neutral-500 text-right font-medium text-sm md:text-md">
              — Bhagavad Gita
            </div>
          </div>
        </MotionDiv>

        {/* Counter */}
        <MotionDiv variants={itemVariants} className="flex justify-center w-full">
          <div className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors group">
            <MotionDiv
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Eye className="size-5 text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors" />
            </MotionDiv>
            <div className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 font-medium">
              You are the{" "}
              <span className="text-neutral-900 dark:text-neutral-100 font-bold tabular-nums">
                {Math.floor(Math.random() * 1000)}<sup>th</sup>
              </span>{" "}
              visitor
            </div>
          </div>
        </MotionDiv>

        {/* Rights */}
        <MotionDiv variants={itemVariants} className="flex flex-col items-center gap-2 text-center">
          <div className="flex items-center gap-1.5 text-sm md:text-base text-neutral-500 dark:text-neutral-400">
            Design & Developed with{" "}
            <MotionSpan
              animate={{ 
                scale: [0.9, 1, 0.9],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                repeatType: "reverse" 
              }}
              className="inline-block"
            >
              <Heart className="size-4 fill-neutral-700 text-neutral-700 dark:fill-neutral-200 dark:text-neutral-200" />
            </MotionSpan>{" "}
            by{" "}
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              Pratham Gambhir
            </span>
          </div>
          <div className="flex items-center gap-1 text-xs md:text-sm text-neutral-400 dark:text-neutral-500">
            <CopyrightIcon className="size-3.5" />
            2026. All Rights Reserved
          </div>
        </MotionDiv>
      </MotionDiv>
    </Container>
  );
}