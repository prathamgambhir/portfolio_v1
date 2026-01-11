import DottedTitle from "@/components/common/dotted-tittle";
import ProjectCard from "@/components/common/project-card";
import { projects } from "@/config/projects";

export default function ProjectsPage() {
    return (
        <div className="px-4 py-8 pb-16 section-seprate flex flex-col">
            <DottedTitle>Projects</DottedTitle>
            <ProjectCard projects={projects} />
        </div>
    );
}