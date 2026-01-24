import { getProjectData } from "@/lib/project-list";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ProjectComponents } from "@/components/mdx-components";
import rehypeHighlight from "@shikijs/rehype"; // Ensure you have this installed
import { ArrowUpRightFromSquare, PlayCircleIcon } from "lucide-react";
import ProjectContent from "@/components/projects/project-content";
// import { useState } from "react";

interface PageProps {
  params: Promise<{ project: string }>;
}

export default async function PerProject({ params }: PageProps) {
  const { project: slug } = await params;
  const allProjects = await getProjectData();
  const project = allProjects.find((p) => p.slug === slug);

  // console.log(project);
  if (!project) {
    return <div className="py-20 text-center">Project Not Found</div>;
  }

  // const [video, openVideo] = useState(false);

  return (
    <article>
      <ProjectContent project={project}/>  
    </article>
  );
}
