export const projects:{
  title: string;
  description: string;
  image: string;
  techstack: {
    name: string,
    icon: string
  }[];
  github: string;
  live: string;
}[] = [
  {
    title: "Schedulify",
    description: "Structured learning journeys created by AI.",
    image: "/imageProject.png", // Replace with your path
    techstack: [{ name: "Next.js", icon: "nextjs.svg" }, { name: "Tailwind", icon: "tailwind.svg" }, { name: "Prisma", icon: "prisma.svg" }, { name: "TypeScript", icon: "typescript.svg" }],
    github: "https://github.com/prathamgambhir/schedulify",
    live: "https://paths-ai.vercel.app",
  },
  {
    title: "Saas",
    description: "Customer Relationship Management app.",
    image: "/imageProject.png",
    techstack: [{ name: "Next.js", icon: "nextjs.svg" }, { name: "Tailwind", icon: "tailwind.svg" }, { name: "Prisma", icon: "prisma.svg" }, { name: "TypeScript", icon: "typescript.svg" }],
    github: "https://github.com/prathamgambhir/Saas-page",
    live: "https://paths-ai.vercel.app",
  },
  {
    title: "X Clone",
    description: "Project Management app with clean UI.",
    image: "/imageProject.png",
    techstack: [{ name: "Next.js", icon: "nextjs.svg" }, { name: "Tailwind", icon: "tailwind.svg" }, { name: "Prisma", icon: "prisma.svg" }, { name: "TypeScript", icon: "typescript.svg" }],
    github: "https://github.com/prathamgambhir/x-clone",
    live: "https://paths-ai.vercel.app",
  }
];