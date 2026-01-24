import { motion } from "framer-motion";

export const DottedArrow = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 800"
      className="absolute -top-20 right-30 size-50 pointer-events-none"
      initial="initial"
      animate="animate"
    >
      <g
        strokeWidth="10"
        stroke="currentColor" // Inherits from text-neutral-400 or similar
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-neutral-400 dark:text-neutral-600"
        /* Maintained your original rotation/transform matrix */
        transform="matrix(0.6156 -0.788 0.788 0.6156 -178.47 468.94)"
      >
        {/* The Loopy Path */}
        <motion.path
          d="M141 141Q562 224 400 400Q319 137 659 659"
          strokeDasharray="15 20" // Keeps the dotted/dashed look from your reference
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 1,
            transition: { 
              duration: 2, 
              ease: "easeInOut",
              delay: 0.5 
            } 
          }}
        />

        {/* The Custom Arrowhead (replaces the marker-end) */}
        <motion.path
          d="M640 640 L665 665 L635 675" // Adjusted to sit at the end of the loop
          strokeWidth="10"
          initial={{ opacity: 0, scale: 0, rotate: 65 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            rotate: 65,
            y: -5,
            transition: { delay: 2.3, duration: 0.3, } 
          }}
        />
      </g>
    </motion.svg>
  );
};