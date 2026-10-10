"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import { Eye } from "lucide-react";
import { MotionDiv } from "../motion-div";
import { getVisitorCount } from "@/actions/visitors";

function ordinalSuffix(n: number) {
  const remainder = n % 100;
  if (remainder >= 11 && remainder <= 13) return "th";
  switch (n % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

export default function VisitorCounterProvider() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    getVisitorCount()
      .then((value) => setCount(value))
      .catch((err) => console.error("Failed to fetch visitor count:", err));
  }, []);

  return (
    <AnimatePresence mode="wait">
      {count !== null && (
        <MotionDiv
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="group flex items-center gap-3 rounded-2xl border border-neutral-200 bg-neutral-100 px-5 py-2.5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
        >
          <MotionDiv
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Eye className="size-5 text-neutral-500 transition-colors group-hover:text-neutral-700 dark:group-hover:text-neutral-300" />
          </MotionDiv>
          <p className="text-sm font-medium text-neutral-600 md:text-base dark:text-neutral-400">
            You are the{" "}
            <span className="font-bold text-neutral-900 tabular-nums dark:text-neutral-100">
              {count.toLocaleString()}
              <sup>{ordinalSuffix(count)}</sup>
            </span>{" "}
            visitor
          </p>
        </MotionDiv>
      )}
    </AnimatePresence>
  );
}
