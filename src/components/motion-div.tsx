"use client";

import { motion, MotionProps } from "motion/react";
import React from "react";

// Define the props, including children and any motion properties
interface MotionDivWrapperProps extends MotionProps {
  children: React.ReactNode;
  className?: string; // Optional className for styling
}
export const MotionDiv: React.FC<MotionDivWrapperProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <motion.div className={className} {...props}>
      {children}
    </motion.div>
  );
};

export default MotionDiv;