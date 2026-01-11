import Image from "next/image";
import DottedTitle from "../common/dotted-tittle";
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
import { projects } from "@/config/projects";

export default function ProjectCard({
  projects,
}: {
  projects: {
    title: string;
    description: string;
    image: string;
    techstack: { name: string; icon: string }[];
    github: string;
    live: string;
  }[];
}) {
    return (
        <div className="flex flex-wrap gap-6">
        {/* projects box - Set to w-full md:w-[48%] for a nice 2-column grid later */}
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full md:w-[calc(50%-12px)] p-3 border border-neutral-200 dark:border-neutral-800 rounded-2xl flex flex-col gap-4 bg-white dark:bg-neutral-900/50"
          >
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* project name and links */}
            <div className="flex items-center justify-between mt-1">
              <h2 className="text-lf tracking-tighter font-medium text-neutral-800 dark:text-neutral-100">
                {project.title}
              </h2>
              <div className="flex gap-1">
                <Link href={project.live}>
                  <div className="about-skill-span text-xs tracking-tighter font-medium flex items-center gap-1">
                    <ArrowUpRightFromSquareIcon className="size-3" />
                    <span>Live</span>
                  </div>
                </Link>
                <Link href={project.github}>
                  <div className="about-skill-span text-xs tracking-tighter font-medium flex items-center gap-1">
                    <Image
                      src="/icons/github.svg"
                      alt="Github"
                      width={20}
                      height={20}
                      className="size-3 dark:bg-neutral-100 rounded-2xl"
                    />
                    <span>Github</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* project description */}
            <div className="text-neutral-500 dark:text-neutral-400 text-sm tracking-tighter mt-1 leading-relaxed line-clamp-2">
              {project.description}
            </div>

            {/* tech stack */}
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-wider font-bold text-neutral-400 dark:text-neutral-500">
                Technologies Used
              </span>
              <div className="flex flex-wrap gap-2 ">
                {project.techstack.map((tech, index) => (
                  <TooltipProvider delayDuration={100} key={index}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Avatar className="size-7 cursor-pointer border border-neutral-200 dark:bg-neutral-50">
                          <AvatarImage src={`/icons/${tech.icon}`} alt={tech.name}/>
                        </Avatar>
                      </TooltipTrigger>
                      <TooltipContent
                        side="top"
                        align="center"
                        className="bg-neutral-50 text-neutral-600 px-3 py-1.5 text-xs font-medium rounded-lg border-none shadow-xl"
                      >
                        <span>
                          {tech.name}
                        </span>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </div>

            {/* all systems working badge */}
            <div className="mt-2 flex items-center gap-2 text-[11px] font-medium green-bg">
              <GreenPing />
              All Systems Working
            </div>
          </div>
        ))}
      </div>
    )
}
