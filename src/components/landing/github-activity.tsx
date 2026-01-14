"use client";

import { GitHubCalendar } from "react-github-calendar";
import DottedTitle from "../common/dotted-tittle";
import { useTheme } from "next-themes";
import { MotionDiv } from "../motion-div";
import { easeOut } from "framer-motion"; // Note: ensure you import from framer-motion or your specific lib

export default function GithubActivity() {
  const { theme } = useTheme();
  const date = new Date();

  return (
    <div className="section-seprate flex flex-col px-4 py-7 pb-10">
      <DottedTitle>GitHub Activity</DottedTitle>

      <MotionDiv
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{
          duration: 0.5,
          delay: 0.1,
          ease: easeOut,
        }}
        viewport={{ once: true, margin: "-50px" }}
        className="w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100/25 p-4 font-sans text-xs tracking-tight shadow-sm dark:border-neutral-800 dark:bg-neutral-900/40"
      >
        <div className="flex items-center justify-center">
          <GitHubCalendar
            username="prathamgambhir"
            year={date.getFullYear()}
            theme={{
              light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
              dark: ["#383838", "#606060", "#8c8c8c", "#bababa", "#ebebeb"], // Standard GH Dark Green
            }}
            labels={{
              totalCount: "{{count}} contributions",
            }}
            colorScheme={theme === "dark" ? "dark" : "light"}
            // Your tooltip logic is excellent—keeping it as is.
            tooltips={{
              activity: {
                text: (activity) =>
                  `${activity.level} contributions on ${activity.date}`,
                placement: "top",
                offset: 6,
                hoverRestMs: 100,
                transitionStyles: {
                  duration: 100,
                  common: {
                    fontFamily: "monospace",
                    fontSize: "12px",
                    backdropFilter: "blur(5px)",
                  },
                },
              },
            }}
          />
        </div>
      </MotionDiv>
    </div>
  );
}
