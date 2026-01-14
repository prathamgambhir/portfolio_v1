import { PenIcon } from "lucide-react";
import DottedTitle from "../common/dotted-tittle";
import { MotionDiv, MotionP, MotionSpan } from "../motion-div";
import { containerVariants, itemVariants } from "@/lib/stagger-animate";

export default function Blogs() {
  return (
    <MotionDiv
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      className="section-seprate px-4 py-7 pb-10"
    >
      <DottedTitle>Blogs</DottedTitle>
      
      <MotionDiv variants={itemVariants} className="text-sm text-neutral-600 dark:text-neutral-400">
        <MotionP
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 1, 0.5] }} // Breathing effect
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="flex items-center gap-2 font-medium tracking-tight"
        >
          <MotionSpan
            animate={{ rotate: [0, 10, 0, -10, 0] }} // Subtle pencil wiggle
            transition={{ duration: 2, repeat: Infinity }}
          >
            <PenIcon className="size-3.5" />
          </MotionSpan>
          Coming Soon...
        </MotionP>
      </MotionDiv>

      {/* Visual card */}
      <MotionDiv 
        variants={itemVariants}
        className="mt-6 h-24 w-full rounded-2xl border border-dashed border-neutral-200 bg-neutral-50/50 dark:border-neutral-800 dark:bg-neutral-900/30 flex items-center justify-center group"
      >
        <span className="text-[11px] uppercase tracking-widest text-neutral-400 font-bold group-hover:scale-105 transition-all duration-300">
          Drafting new stories
        </span>
      </MotionDiv>
    </MotionDiv>
  );
}