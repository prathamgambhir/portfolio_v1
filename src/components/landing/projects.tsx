import DottedTitle from "../common/dotted-tittle";
import { projects } from "@/config/projects";
import ProjectCard from "../projects/project-card";
import { Button } from "../ui/button";
import Link from "next/link";
import { MotionDiv } from "../motion-div";
import { containerVariants, itemVariants } from "@/lib/stagger-animate";

export default function Projects() {
  const displayProject = projects.slice(0, 2);
  return (
    <MotionDiv
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      className="section-seprate flex flex-col px-4 py-7 pb-10"
    >
      <DottedTitle>Projects</DottedTitle>
      <ProjectCard projects={displayProject} />
      <MotionDiv variants={itemVariants} className="flex items-center justify-center">
        <Button className="links-span mx-auto mt-16" asChild>
          <Link href="/projects">Show all Projects</Link>
        </Button>
      </MotionDiv>
    </MotionDiv>
  );
}
