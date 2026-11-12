import { Calendar, Clock3 } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "@shikijs/rehype";
import { format, parseISO } from "date-fns";
import { Blog } from "@/types/blog";
import { MdxComponents } from "@/components/mdx-components";
import { MotionDiv, MotionLink } from "../motion-div";
import { containerVariants, itemVariants } from "@/lib/stagger-animate";
import ShareButton from "./share-button";
import MdxImage from "./mdx-image";

function displayDate(date: string) {
  try {
    return format(parseISO(date), "MMMM d, yyyy");
  } catch {
    return date;
  }
}

function readingTime(content: string) {
  const words = content
    .replace(/```[\s\S]*?```/g, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  return Math.max(1, Math.ceil(words.length / 220));
}

export default function BlogContent({ blog }: { blog: Blog }) {
  return (
    <MotionDiv
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="font-poppins mx-auto max-w-3xl overflow-x-clip px-5 py-8 md:px-8 md:py-12"
    >
      <MotionLink
        variants={itemVariants}
        href="/blogs"
        whileHover={{ x: -3 }}
        whileTap={{ scale: 0.97 }}
        className="mb-8 inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-medium text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-neutral-100"
      >
        <span aria-hidden>←</span>
        Back to Blog
      </MotionLink>

      {blog.cover && (
        <MotionDiv
          variants={itemVariants}
          className="flex w-full items-center justify-center"
        >
          <MdxImage
            src={blog.cover}
            alt={blog.coverAlt ?? ""}
            priority
            className="mb-8 [&_img]:aspect-[16/8] [&_img]:bg-neutral-100 dark:[&_img]:bg-neutral-900"
          />
        </MotionDiv>
      )}

      <MotionDiv variants={itemVariants} className="mb-8 space-y-3.5">
        {/* <h1 className="max-w-2xl text-2xl leading-[1.15] font-semibold tracking-[-0.035em] text-neutral-900 sm:text-3xl md:text-[2.15rem] dark:text-neutral-50">
          {blog.title}
        </h1>

        {blog.description && (
          <p className="max-w-xl text-sm leading-6 text-neutral-500 md:text-[15px] md:leading-7 dark:text-neutral-400">
            {blog.description}
          </p>
        )} */}

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-dashed border-neutral-200 pt-3.5 dark:border-neutral-800">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-neutral-400 dark:text-neutral-500">
            {blog.date && (
              <div className="flex items-center gap-1.5">
                <Calendar className="size-4" />
                <time dateTime={blog.date}>{displayDate(blog.date)}</time>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <Clock3 className="size-4" />
              <span>{readingTime(blog.content)} min read</span>
            </div>
          </div>
          <ShareButton />
        </div>
      </MotionDiv>

      <MotionDiv
        variants={itemVariants}
        className="blog-prose mx-auto max-w-2xl pb-24"
      >
        <MDXRemote
          source={blog.content}
          components={MdxComponents}
          options={{
            mdxOptions: {
              rehypePlugins: [
                [
                  rehypeHighlight,
                  {
                    themes: {
                      light: "github-light",
                      dark: "github-dark",
                    },
                    addLanguageClass: true,
                  },
                ],
              ],
            },
          }}
        />
      </MotionDiv>

      <MotionDiv
        variants={itemVariants}
        className="mx-auto max-w-2xl pt-7 text-center border-b border-dashed border-neutral-200 pb-12 dark:border-neutral-800"
      >
        <p className="text-sm leading-6 text-neutral-500 dark:text-neutral-400 text-center ">
          Thanks for reading. See you another time.<br />
          Byee🫡
        </p>
      </MotionDiv>
    </MotionDiv>
  );
}
