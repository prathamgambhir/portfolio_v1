import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ProjectComponents } from "@/components/mdx-components";
import rehypeHighlight from "@shikijs/rehype"; // Ensure you have this installed
import { ArrowUpRightFromSquare, PlayCircleIcon } from "lucide-react";
import { Project } from "@/types/project";
import ProjectVideo from "./project-video";
import { MotionDiv, MotionLink } from "../motion-div";
import { containerVariants, itemVariants } from "@/lib/stagger-animate";

interface PageProps {
  project: Project;
}

export default function ProjectContent({ project }: PageProps) {
  return (
    <>
      <MotionDiv
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px"}}
        className="font-poppins mx-auto max-w-4xl px-6 py-12"
      >
        {/* 1. VIDEO */}
        <div>
          <ProjectVideo project={project} />
        </div>

        {/* 2. BADGES & TITLE */}
        <div className="mb-6 space-y-4">
          <MotionDiv variants={itemVariants} className="flex flex-wrap gap-2">
            <span className="rounded-md border border-green-300 bg-green-100 px-2.5 py-0.5 text-xs font-semibold uppercase dark:border-green-700 dark:bg-green-900">
              {project.status}
            </span>
            {project.teachnologies?.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-muted-foreground rounded-md border px-2.5 py-0.5 text-xs font-medium"
              >
                {tech}
              </span>
            ))}
            {(project.teachnologies?.length ?? 0) > 4 && (
              <span className="text-muted-foreground text-xs">
                +{project.teachnologies!.length - 4} more
              </span>
            )}
          </MotionDiv>

          <MotionDiv variants={itemVariants} className="text-4xl font-bold tracking-tight lg:text-5xl">
            {project.title}
          </MotionDiv>
        </div>

        {/* 3. METADATA GRID */}
        <MotionDiv variants={itemVariants} className="zinc-box hover:scale-100 mb-8 grid grid-cols-2 gap-4 md:grid-cols-4 hover:bg-zinc-50 hover:dark:bg-zinc-900 transition-all duration-300">
          <div>
            <h4 className="text-muted-foreground text-xs font-bold uppercase">
              Timeline
            </h4>
            <p className="text-sm font-medium">{project.timeline || "N/A"}</p>
          </div>
          <div>
            <h4 className="text-muted-foreground text-xs font-bold uppercase">
              Role
            </h4>
            <p className="text-sm font-medium">{project.role || "Developer"}</p>
          </div>
          <div>
            <h4 className="text-muted-foreground text-xs font-bold uppercase">
              Team
            </h4>
            <p className="text-sm font-medium">{project.team || "Solo"}</p>
          </div>
          <div>
            <h4 className="text-muted-foreground text-xs font-bold uppercase">
              Status
            </h4>
            <p className="text-sm font-medium capitalize">{project.status}</p>
          </div>
        </MotionDiv>

        {/* 4. ACTION BUTTONS */}
        <MotionDiv variants={itemVariants} className="mb-8 flex items-center gap-4 border-b border-neutral-200 pb-12 dark:border-neutral-800 transition-all duration-300">
          {project.live && (
            <MotionLink
              whileTap={{scale: 0.85}}
              href={project.live}
              target="_blank"
              className="about-skill-span inline-flex h-10 items-center justify-center gap-2 px-4 text-sm font-medium transition-colors"
            >
              Live Demo
              <ArrowUpRightFromSquare className="size-4" />
            </MotionLink>
          )}
          {project.github && (
            <MotionLink
              whileTap={{scale: 0.85}}
              href={project.github}
              target="_blank"
              className="zinc-box inline-flex h-10 items-center justify-center gap-2 px-3 text-sm font-medium transition-colors"
            >
              Source Code
              <Image
                src="/icons/github.svg"
                alt="GitHub Logo"
                width={20}
                height={20}
                className="size-5 rounded-full dark:bg-neutral-100"
              />
            </MotionLink>
          )}
        </MotionDiv>

        {/* 5. MDX CONTENT */}
        <MotionDiv variants={itemVariants} className="prose prose-neutral dark:prose-invert prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 max-w-none border-b border-dashed border-neutral-200 pb-12 dark:border-neutral-800">
          <MDXRemote
            source={project.content}
            components={ProjectComponents}
            options={{
              mdxOptions: {
                rehypePlugins: [
                  [
                    rehypeHighlight,
                    {
                      // Theme options: 'dracula', 'nord', 'one-dark-pro', etc.
                      theme: "github-dark",
                    },
                  ],
                ],
              },
            }}
          />
        </MotionDiv>
      </MotionDiv>
    </>
  );
}
