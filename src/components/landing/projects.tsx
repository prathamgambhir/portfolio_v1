import DottedTitle from "../common/dotted-tittle";
import { projects } from "@/config/projects";
import ProjectCard from "../common/project-card";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Projects() {
  const displayProject = projects.slice(0, 2);
  return (
    <div className="section-seprate flex flex-col px-4 py-7 pb-10">
      <DottedTitle>Projects</DottedTitle>
      <ProjectCard projects={displayProject} />
      <Button className="mx-auto mt-16 links-span " asChild>
        <Link href="/projects">Show all Projects</Link>
      </Button>
    </div>
  );
}
