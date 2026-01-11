import Container from "@/components/common/container";
import Education from "@/components/landing/education";
import GithubActivity from "@/components/landing/github-activity";
import Hero from "@/components/landing/hero";
import Projects from "@/components/landing/projects";
import Skills from "@/components/landing/skills";
import Experience from "@/components/landing/experience";

export default function Home() {
  return (
    <>
      <Container className="min-h-screen mask-t-from-98%">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <GithubActivity />
        <Education />
      </Container>
    </>
  );
}
