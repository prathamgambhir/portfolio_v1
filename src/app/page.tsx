import Container from "@/components/common/container";
import Education from "@/components/landing/education";
import Hero from "@/components/landing/hero";
import Projects from "@/components/landing/projects";
import Skills from "@/components/landing/skills";

export default function Home() {
  return (
    <Container className="min-h-screen ">
      <Hero />
      <Skills />
      <Education />
      <Projects />
    </Container>
  );
}
