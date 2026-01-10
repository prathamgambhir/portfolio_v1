import { skills } from "@/config/technologies";
import Image from "next/image";
import DottedTitle from "../common/dotted-tittle";

export default function Skills() {
  return (
    <div className="px-4 py-7 pb-10 section-seprate flex flex-col ">
      {/* tech stack */}
      <DottedTitle>Tools & Technologies I Use</DottedTitle>
      {/*Tech Icons*/}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => {
          return (
            <div
              key={idx}
              className="about-skill-span h-9 md:h-7.5 font-medium text-sm flex items-center gap-2"
            >
              <span>
                <Image
                  src={`/icons/${skill.icon}`}
                  alt={skill.name}
                  width={20}
                  height={20}
                  className="dark:bg-neutral-100 dark:rounded-sm"
                />
              </span>
              {skill.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
