export const projects: {
  title: string;
  href: string;
  description: string;
  image: string;
  techstack: {
    name: string;
    icon: string;
  }[];
  github: string;
  live: string;
}[] = [
  {
    title: "Schedulify",
    href: "schedulify",
    description: "Structured learning journeys created by AI.",
    image: "/projects/schedulify.png", // Replace with your path
    techstack: [
      { name: "Next.js", icon: "nextjs.svg" },
      { name: "Tailwind", icon: "tailwind.svg" },
      { name: "Prisma", icon: "prisma.svg" },
      { name: "TypeScript", icon: "typescript.svg" },
    ],
    github: "https://github.com/prathamgambhir/schedulify",
    live: "https://scheduulify.vercel.app",
  },
  {
    title: "TaskFlow AI",
    href: "taskflowai",
    description:
      "Landing Page for TaskFloww, an AI-powered task management solution for modern teams",
    image: "/projects/taskflowwai.png",
    techstack: [
      { name: "Next.js", icon: "nextjs.svg" },
      { name: "Tailwind", icon: "tailwind.svg" },
      { name: "Framer Motion", icon: "framer.svg" },
      { name: "TypeScript", icon: "typescript.svg" },
    ],
    github: "https://github.com/prathamgambhir/TaskFlow-Ai",
    live: "https://taskflowwai.vercel.app",
  },
  {
    title: "X Clone",
    href: "xclone",
    description: "Project Management app with clean UI.",
    image: "/imageProject.png",
    techstack: [
      { name: "Next.js", icon: "nextjs.svg" },
      { name: "Tailwind", icon: "tailwind.svg" },
      { name: "Prisma", icon: "prisma.svg" },
      { name: "TypeScript", icon: "typescript.svg" },
    ],
    github: "https://github.com/prathamgambhir/x-clone",
    live: "https://paths-ai.vercel.app",
  },
];
