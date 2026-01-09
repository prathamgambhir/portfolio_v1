interface Skill {
  name: string;
  icon : string; // Using common Lucide-react or SimpleIcons naming conventions
}

export const skills: Skill[] = [
  // Languages
  { name: "TypeScript", icon: "typescript.svg" },
  { name: "JavaScript", icon: "javascript.svg" },

  // Frontend
  { name: "React.js", icon: "react.svg" },
  { name: "Next.js", icon: "nextjs.svg" },
  { name: "Redux.js", icon: "redux.svg" },
  { name: "Tailwind CSS", icon: "tailwind.svg"},
  { name: "ShadCn", icon: "shadcn.svg" },
  { name: "Framer Motion", icon: "framer.svg" },

  // Backend
  { name: "Node.js", icon: "nodejs.svg"},
  { name: "Express.js", icon: "express.svg" },
  { name: "REST APIs", icon: "api.svg" },
  { name: "Socket.Io", icon: "socketio.svg" },
  { name: "Clerk", icon: "clerk.svg"}, // Auth

  // Databases & ORM
  { name: "PostgreSQL", icon: "postgresql.svg" },
  { name: "MongoDB", icon: "mongodb.svg" },
  { name: "Redis", icon: "redis.svg" },
  { name: "Prisma ORM", icon: "prisma.svg" },
  { name: "Postman", icon: "postman.svg" },

  // Tools & DevOps
  { name: "Git", icon: "git.svg" },
  { name: "GitHub", icon: "github.svg" },
  { name: "Docker",icon: "docker.svg" },
];
