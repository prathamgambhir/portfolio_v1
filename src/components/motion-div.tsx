"use client";

import { motion, MotionProps } from "motion/react";
import React from "react";

// Define the props, including children and any motion properties
interface MotionDivWrapperProps extends MotionProps{
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

interface MotionSpanWrapperProps extends MotionProps {
  children: React.ReactNode;
  className?: string; // Optional className for styling
}
export const MotionSpan: React.FC<MotionSpanWrapperProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <motion.span className={className} {...props}>
      {children}
    </motion.span>
  );
};

interface MotionParagraphWrapperProps extends MotionProps {
  children: React.ReactNode;
  className?: string; // Optional className for styling
}
export const MotionP: React.FC<MotionParagraphWrapperProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <motion.span className={className} {...props}>
      {children}
    </motion.span>
  );
};

export default {MotionDiv, MotionSpan, MotionP};