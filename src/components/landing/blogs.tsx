import DottedTitle from "../common/dotted-tittle";
import { MotionDiv } from "../motion-div";
import { containerVariants, itemVariants } from "@/lib/stagger-animate";
import { getBlogData } from "@/lib/blog-list";
import BlogList from "../blogs/blog-list";
import { Button } from "../ui/button";
import Link from "next/link";

export default async function Blogs() {
  const blogs = (await getBlogData()).slice(0, 2);

  return (
    <MotionDiv
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      className="section-seprate px-4 py-7 pb-10"
    >
      <DottedTitle>Blogs</DottedTitle>
      <BlogList blogs={blogs} />
      {blogs.length > 0 && (
        <MotionDiv
          variants={itemVariants}
          className="flex items-center justify-center"
        >
          <Button className="links-span mx-auto mt-10" asChild>
            <Link href="/blogs">Show all Blogs</Link>
          </Button>
        </MotionDiv>
      )}
    </MotionDiv>
  );
}
