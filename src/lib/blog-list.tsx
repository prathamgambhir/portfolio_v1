import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Blog } from "@/types/blog";

const blogsDirectory = path.join(process.cwd(), "src/data/blogs");

function formatDate(value: unknown) {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }

  if (typeof value === "string" && value.trim()) {
    return value;
  }

  return "";
}

function stripLeadingTitle(content: string, title: string) {
  const escaped = title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return content.replace(new RegExp(`^\\s*#\\s+${escaped}\\s*\\n+`), "");
}

function parseBlogFile(filename: string): Blog {
  const slug = filename.replace(/\.mdx?$/, "");
  const filePath = path.join(blogsDirectory, filename);
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContents);
  const title = data.title ?? slug;

  return {
    slug,
    title,
    description: data.description,
    date: formatDate(data.date),
    author: data.author,
    tags: Array.isArray(data.tags)
      ? data.tags.filter((tag): tag is string => typeof tag === "string")
      : [],
    cover: data.cover,
    coverAlt: data.coverAlt,
    coverCaption: data.coverCaption,
    content: stripLeadingTitle(content, title),
  };
}

export async function getBlogData(): Promise<Blog[]> {
  if (!fs.existsSync(blogsDirectory)) return [];

  return fs
    .readdirSync(blogsDirectory)
    .filter((filename) => filename.endsWith(".md") || filename.endsWith(".mdx"))
    .map(parseBlogFile)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getBlogBySlug(slug: string) {
  const blogs = await getBlogData();
  return blogs.find((blog) => blog.slug === slug);
}

export async function getBlogSlugs() {
  const blogs = await getBlogData();
  return blogs.map((blog) => blog.slug);
}
