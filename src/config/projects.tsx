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
    description: `Schedulify is a full-stack scheduling project, 
    It removes the back-and-forth of scheduling meetings by allowing users 
    to share a booking link that automatically syncs with their calendar and generates meeting links.`,
    image: "/projects/schedulify.png",
    techstack: [
      { name: "Next.js", icon: "nextjs.svg" },
      { name: "TypeScript", icon: "typescript.svg" },
      { name: "NextAuth", icon: "nextauth.svg" },
      { name: "Prisma", icon: "prisma.svg" },
      { name: "PostgreSQL", icon: "postgresql.svg" },
      { name: "Google API", icon: "api.svg" },
      { name: "Tailwind", icon: "tailwind.svg" },
      { name: "Framer Motion", icon: "framer.svg" },
      { name: "Zod", icon: "zod.svg" },
      { name: "ShadCn", icon: "shadcn.svg" },
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
      { name: "TypeScript", icon: "typescript.svg" },
      { name: "Tailwind", icon: "tailwind.svg" },
      { name: "Framer Motion", icon: "framer.svg" },
      { name: "ShadCn", icon: "shadcn.svg" },
    ],
    github: "https://github.com/prathamgambhir/TaskFlow-Ai",
    live: "https://taskflowwai.vercel.app",
  },
  {
    title: "X Clone",
    href: "xclone",
    description: `Project Management app with clean UI.`,
    image: "/projects/xclone.png",
    techstack: [
      { name: "React", icon: "react.svg" },
      { name: "TypeScript", icon: "typescript.svg" },
      { name: "Redux", icon: "redux.svg" },
      { name: "MongoDB", icon: "mongodb.svg" },
      { name: "Express", icon: "express.svg" },
      { name: "Postman", icon: "postman.svg" },
      { name: "Tailwind", icon: "tailwind.svg" },
      { name: "ShadCn", icon: "shadcn.svg" },
      { name: "Zod", icon: "zod.svg" },
    ],
    github: "https://github.com/prathamgambhir/x-clone",
    live: "/projects/xclone",
  },
];
