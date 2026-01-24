import DottedTitle from "@/components/common/dotted-tittle";
import ProjectCard from "@/components/projects/project-card";
import { projects } from "@/config/projects";

export default function ProjectsPage() {
  return (
    <div className="section-seprate flex flex-col px-4 py-8 pb-16">
      <DottedTitle>Projects</DottedTitle>
      <div>
        <ProjectCard projects={projects} />
      </div>
    </div>
  );
}
