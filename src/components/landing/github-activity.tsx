"use client";

import { GitHubCalendar } from "react-github-calendar";
import DottedTitle from "../common/dotted-tittle";
import { useTheme } from "next-themes";

export default function GithubActivity() {
  const { theme } = useTheme();
  const date = new Date();
  return (
    <div className="px-4 py-7 pb-10 section-seprate flex flex-col">
      <DottedTitle>GitHub Activity</DottedTitle>
      <div className="w-full px-2 border border-neutral-200 dark:border-neutral-800 rounded-md py-1 tracking-tighter text-xs font-light">
        <GitHubCalendar
          username="prathamgambhir"
          year={date.getFullYear()}
          theme={{
            light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
            dark: ["#383838", "#606060", "#8c8c8c", "#bababa", "#ebebeb"],
          }}
          colorScheme={theme === "dark" ? "dark" : "light"}
          tooltips={{
            activity: {
              text: (activity) =>
                `${activity.level} contributions on ${activity.date}`,
              placement: "top",
              offset: 6,
              hoverRestMs: 100,
              transitionStyles: {
                duration: 100,
                common: { fontFamily: "monospace", fontSize: "12px" , backdropFilter: "blur(5px)"},
              },
            },
          }}
        />
      </div>
    </div>
  );
}
