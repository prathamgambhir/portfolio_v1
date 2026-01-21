import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Project } from "@/types/project";

const projectsDirectory = path.join(process.cwd(), "src/data/projects");

//frontmatter/mdx fields

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
