import { notFound } from "next/navigation";
import { getBlogBySlug, getBlogSlugs } from "@/lib/blog-list";
import BlogContent from "@/components/blogs/blog-content";

interface PageProps {
  params: Promise<{ blog: string }>;
}

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();
  return slugs.map((blog) => ({ blog }));
}

export async function generateMetadata({ params }: PageProps) {
  const { blog: slug } = await params;
  const post = await getBlogBySlug(slug);

  if (!post) {
    return { title: "Blog not found" };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPage({ params }: PageProps) {
  const { blog: slug } = await params;
  const post = await getBlogBySlug(slug);

  if (!post) notFound();

  return (
    <article>
      <BlogContent blog={post} />
    </article>
  );
}
