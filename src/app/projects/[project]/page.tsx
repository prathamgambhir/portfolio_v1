import { getProjectData } from "@/lib/project-content";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ProjectComponents } from "@/components/mdx-components";
import rehypeHighlight from "@shikijs/rehype"; // Ensure you have this installed
import { ArrowUpRightFromSquare } from "lucide-react";

interface PageProps {
  params: Promise<{ project: string }>;
}

export default async function PerProject({ params }: PageProps) {
  const { project: slug } = await params;
  const allProjects = await getProjectData();
  const project = allProjects.find((p) => p.slug === slug);

  console.log(project);
  if (!project) {
    return <div className="py-20 text-center">Project Not Found</div>;
  }

  return (
    <article className="font-poppins mx-auto max-w-4xl px-6 py-12">
      {/* 1. HERO IMAGE */}
      <div className="bg-muted relative mb-8 aspect-video overflow-hidden rounded-2xl border border-neutral-200 ">
        {project.image && (
          <Image
            src={project.image}
            alt={project.title || "Project Image"}
            fill
            className="object-cover"
            priority
          />
        )}
      </div>

      {/* 2. BADGES & TITLE */}
      <div className="mb-6 space-y-4">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-md bg-green-100 px-2.5 py-0.5 text-xs border border-green-300 dark:border-green-700 font-semibold uppercase dark:bg-green-900">
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
        </div>

        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          {project.title}
        </h1>
      </div>

      {/* 3. METADATA GRID */}
      <div className="zinc-box mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
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
      </div>

      {/* 4. ACTION BUTTONS */}
      <div className="mb-12 flex items-center gap-4 border-b border-neutral-200 dark:border-neutral-800 pb-12">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            className="about-skill-span gap-2 inline-flex h-10 items-center justify-center px-4 text-sm font-medium transition-colors"
          >
            Live Demo
            <ArrowUpRightFromSquare className="size-4" />
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            className="zinc-box gap-2 inline-flex h-10 items-center justify-center px-3 text-sm font-medium transition-colors"
          >
            Source Code
            <Image
              src="/icons/github.svg"
              alt="GitHub Logo"
              width={20}
              height={20}
              className="size-5 dark:bg-neutral-100 rounded-full"
            />
          </a>
        )}
      </div>

      {/* 5. MDX CONTENT */}
      <div className="prose prose-neutral dark:prose-invert prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 max-w-none">
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
      </div>
    </article>
  );
}
