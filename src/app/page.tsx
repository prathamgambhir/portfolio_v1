import Container from "@/components/common/container";
import Hero from "@/components/landing/hero";
import Skills from "@/components/landing/skills";

export default function Home() {
  return (
    <Container className="min-h-screen ">
      <Hero />
      <Skills />
    </Container>
  );
}
