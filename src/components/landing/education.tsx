import { educationData } from "@/config/education";
import Image from "next/image";
import DottedTitle from "../common/dotted-tittle";

export default function Education() {
  return (
    <div className="px-4 py-7 pb-10 section-seprate">
      <DottedTitle>Education</DottedTitle>
      <div className="flex flex-col gap-8">
        {educationData.map((edu, index) => (
          <div key={index} className="flex items-start justify-between group">
            <div className="flex items-center gap-4">
              {/* logo */}
              <div className="relative w-14 h-14 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex items-center justify-center overflow-hidden shadow-sm">
                <Image
                  src={`icons/${edu.logo}`}
                  alt={edu.institution}
                  width={40}
                  height={40}
                  className="object-contain rounded-lg"
                />
              </div>

              {/* Institute and degree */}
              <div className="flex flex-col">
                <h3 className="text-base font-medium leading-tight text-neutral-700 dark:text-neutral-200 group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors">
                  {edu.institution}
                </h3>
                <p className="text-neutral-500 dark:text-neutral-400 text-xs mt-1">
                  {edu.degree}
                </p>
              </div>
            </div>

            {/* duration */}
            <div className="text-neutral-400 dark:text-neutral-500 text-sm font-medium pt-2.5 tabular-nums">
              {edu.duration}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
