import Image from "next/image";
import DottedTitle from "../common/dotted-tittle";
import GreenPing from "../common/green-ping";
import { ChevronDown } from "lucide-react";
import { experienceData } from "@/config/experience";

export default function Experience() {
  return (
    <div className="px-4 py-7 pb-10 section-seprate flex flex-col">
      <DottedTitle>Experience</DottedTitle>
      <div className="flex flex-col gap-4">
        {experienceData.map((experience, index) => (
          // experience box
          <div
            key={index}
            className="border flex justify-between items-center border-neutral-200 dark:border-neutral-800 rounded-lg px-5 py-5"
          >
            {/* left box */}
            <div className="flex items-center gap-3">
              <div className="size-10 bg-black rounded-md overflow-hidden">
                <Image
                  src={`/${experience.logo}`}
                  alt={experience.company}
                  width={20}
                  height={20}
                  className="object-cover size-full"
                />
              </div>
              {/* name and role */}
              <div className=" tracking-tighter flex flex-col">
                <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                  {experience.company}
                  {
                    experience.current ? (
                      <div className="flex items-center gap-2 text-[11px] font-medium green-bg py-0">
                        <GreenPing />
                        Current
                      </div>
                    ) : null
                  }
                </div>
                <div className="text-[11px] font-light text-neutral-500 dark:text-neutral-400">
                  {experience.designation}
                </div>
              </div>
            </div>
            {/* right box */}
            <div className="flex items-center gap-4 md:gap-8">
              <div className="text-xs flex flex-col tracking-tighter">
                <div className="max-w-30 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                  {`${experience.start}${experience.end ? `-\n${experience.end}` : ""}`} 
                </div>
                <div className="text-[11px] self-end font-light text-neutral-500 dark:text-neutral-400">
                  {experience.region}
                </div>
              </div>
              <div className="border p-0.5 rounded-full border-neutral-300 dark:border-neutral-500">
                <ChevronDown className="size-3" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
