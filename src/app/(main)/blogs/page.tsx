import DottedTitle from "@/components/common/dotted-tittle";
import BlogList from "@/components/blogs/blog-list";
import { MotionDiv } from "@/components/motion-div";
import { containerVariants, itemVariants } from "@/lib/stagger-animate";
import { getBlogData } from "@/lib/blog-list";

export const metadata = {
  title: "Blogs",
  description: "Notes, write-ups, and things I learned while building.",
};

export default async function BlogsPage() {
  const blogs = await getBlogData();

  return (
    <MotionDiv
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="section-seprate px-5 py-9 pb-24 md:px-8 md:py-12 md:pb-32"
    >
      <DottedTitle>Blogs</DottedTitle>

      <MotionDiv
        variants={itemVariants}
        className="mb-8 max-w-xl text-sm leading-6 text-neutral-500 dark:text-neutral-400"
      >
        Thoughts, tutorials, and notes from building things.
      </MotionDiv>

      <BlogList blogs={blogs} />
    </MotionDiv>
  );
}
