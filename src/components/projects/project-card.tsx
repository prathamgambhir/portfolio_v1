import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightFromSquareIcon } from "lucide-react";
import GreenPing from "../common/green-ping";
import { Avatar, AvatarImage } from "../ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { MotionDiv } from "../motion-div";
import { containerVariants, itemVariants } from "@/lib/stagger-animate";

export default function ProjectCard({
  projects,
}: {
  projects: {
    title: string;
    href: string;
    description: string;
    image: string;
    techstack: { name: string; icon: string }[];
    github: string;
    live: string;
  }[];
}) {
  return (
    <MotionDiv
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-wrap gap-6"
    >
      {projects.map((project, index) => (
        <MotionDiv
          key={index}
          variants={itemVariants}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          // onClick={() => redirect(`/projects/${project.title}`)}
          className="group flex w-full flex-col gap-4 rounded-2xl border border-neutral-200 bg-white p-3 shadow-sm transition-shadow hover:shadow-md md:w-[calc(50%-12px)] dark:border-neutral-800 dark:bg-neutral-900/50"
        >
          {/* Image Section with Zoom on Hover */}
          <div className="relative aspect-video overflow-hidden rounded-xl">
            <MotionDiv
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="h-full w-full"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </MotionDiv>
          </div>

          {/* Project Name and Links */}
          <div className="mt-1 flex items-center justify-between">
            <Link href={`/projects/${project.href}`}>
              <h2 className="text-lg font-semibold tracking-tight text-neutral-800 dark:text-neutral-100">
                {project.title}
              </h2>
            </Link>
            <div className="flex gap-1">
              <Link href={project.live} target="_blank">
                <div className="about-skill-span flex items-center gap-1 text-xs font-medium tracking-tighter transition-all duration-300 hover:scale-105 hover:bg-neutral-100 dark:hover:bg-neutral-800">
                  <ArrowUpRightFromSquareIcon className="size-3" />
                  <span>Live</span>
                </div>
              </Link>
              <Link href={project.github} target="_blank">
                <div className="about-skill-span flex items-center gap-1 text-xs font-medium tracking-tighter transition-all duration-300 hover:scale-105 hover:bg-neutral-100 dark:hover:bg-neutral-800">
                  <Image
                    src="/icons/github.svg"
                    alt="Github"
                    width={20}
                    height={20}
                    className="size-3 rounded-2xl dark:bg-neutral-100"
                  />
                  <span>Github</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Project Description */}
          <div className="line-clamp-2 text-sm leading-relaxed tracking-tighter text-neutral-500 dark:text-neutral-400">
            {project.description}
          </div>

          {/* Tech Stack - Stagged Animation Applied Here */}
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-bold tracking-wider text-neutral-400 uppercase dark:text-neutral-500">
              Technologies Used
            </span>
            <MotionDiv
              variants={containerVariants} // Re-using container variants for internal stagger
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-20px" }}
              className="flex flex-wrap gap-2"
            >
              {project.techstack.map((tech, techIdx) => (
                <MotionDiv
                  key={techIdx}
                  variants={itemVariants} // Re-using item variants for each icon
                  whileHover={{ y: -3, scale: 1.1 }}
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Avatar className="size-7 cursor-pointer border border-neutral-200 bg-white transition-transform active:scale-90 dark:bg-neutral-50">
                          <AvatarImage
                            src={`/icons/${tech.icon}`}
                            alt={tech.name}
                            className="p-1" // Added padding to show avatar background
                          />
                        </Avatar>
                      </TooltipTrigger>
                      <TooltipContent
                        side="top"
                        align="center"
                        className="mb-1 rounded-lg border-none bg-neutral-900 px-3 py-1.5 text-xs font-medium text-white shadow-xl dark:bg-neutral-100 dark:text-neutral-900"
                      >
                        <span>{tech.name}</span>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </MotionDiv>
              ))}
            </MotionDiv>
          </div>

          {/* Badge */}
          <div className="green-bg mt-auto flex items-center gap-2 self-start text-[11px] font-medium">
            <GreenPing />
            All Systems Working
          </div>
        </MotionDiv>
      ))}
    </MotionDiv>
  );
}
