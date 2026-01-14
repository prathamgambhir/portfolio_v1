import { educationData } from "@/config/education";
import Image from "next/image";
import DottedTitle from "../common/dotted-tittle";
import { containerVariants, itemVariants } from "@/lib/stagger-animate";
import {MotionDiv} from "../motion-div";

export default function Education() {
  return (
    <MotionDiv
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      className="section-seprate px-4 py-7 pb-10"
    >
      <DottedTitle>Education</DottedTitle>

      <div className="flex flex-col gap-2">
        {educationData.map((edu, index) => (
          <MotionDiv
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5 }} // Subtle slide on hover
            className="group flex items-center justify-between rounded-2xl p-3 transition-colors hover:bg-neutral-50 md:mx-0 dark:hover:bg-neutral-900/50"
          >
            <div className="flex items-center gap-5">
              {/* Logo with individual animation */}
              <MotionDiv
                whileHover={{ rotate: -5, scale: 1.1 }}
                className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-shadow group-hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
              >
                <Image
                  src={`/icons/${edu.logo}`}
                  alt={edu.institution}
                  width={40}
                  height={40}
                  className="object-cover p-2"
                />
              </MotionDiv>

              {/* Institute and degree */}
              <div className="flex flex-col">
                <h3 className="text-[15px] leading-tight font-semibold text-neutral-800 transition-colors dark:text-neutral-200">
                  {edu.institution}
                </h3>
                <p className="mt-1 text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  {edu.degree}
                </p>
              </div>
            </div>

            {/* duration */}
            <div className="text-right hidden sm:block mb-2">
              <span className="rounded-full border border-neutral-200 px-3 py-1 text-[11px] font-bold tracking-wider text-neutral-400 uppercase dark:border-neutral-800 dark:text-neutral-500">
                {edu.duration}
              </span>
            </div>
          </MotionDiv>
        ))}
      </div>
    </MotionDiv>
  );
}
