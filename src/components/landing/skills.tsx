import { skills } from "@/config/technologies";
import Image from "next/image";

export default function Skills() {
  return (
    <div className="px-4 py-7 pb-10 section-seprate flex flex-col ">
      {/* tech stack */}
      <div className="pb-10 flex ">
        <h2 className="card-title ">
          <div className="corner corner-tl"></div>{" "}
          <div className="corner corner-tr"></div>{" "}
          <div className="corner corner-bl"></div>{" "}
          <div className="corner corner-br"></div>
          Tools & Technologies I Use
        </h2>
      </div>
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
