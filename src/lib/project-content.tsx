import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

const projectsDirectory = path.join(process.cwd(), "src/data/projects");

//frontmatter/mdx fields
export interface Project {
  slug: string;
  content: string;
  title?: string;
  image?: string;
  description?: string;
  challenges?: string[];
  descrption?: string;
  featured?: boolean;
  github?: string;
  isPublished?: boolean;
  learnings?: string[];
  live?: string;
  role?: string;
  status: string;
  team?: string;
  teachnologies?: string[];
  timeline?: string;
}

export async function getProjectData(): Promise<Project[]> {
  const fileNames = fs.readdirSync(projectsDirectory);
  
  return fileNames.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const filePath = path.join(projectsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf-8");

    const { content, data } = matter(fileContents);

    return {
      slug,
      content,
      ...data,
    } as Project;
  });
}
