import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { format, parseISO } from "date-fns";
import { Blog } from "@/types/blog";
import { MotionDiv } from "../motion-div";
import { containerVariants, itemVariants } from "@/lib/stagger-animate";

function displayDate(date: string) {
  try {
    return format(parseISO(date), "MMMM d, yyyy");
  } catch {
    return date;
  }
}

export default function BlogList({ blogs }: { blogs: Blog[] }) {
  if (blogs.length === 0) {
    return (
      <MotionDiv
        variants={itemVariants}
        className="mt-6 flex min-h-28 items-center justify-center rounded-xl border border-dashed border-neutral-200 px-5 text-xs text-neutral-400 dark:border-neutral-800 dark:text-neutral-500"
      >
        New writing is on the way.
      </MotionDiv>
    );
  }

  return (
    <MotionDiv
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="grid gap-3"
    >
      {blogs.map((blog, index) => (
        <MotionDiv
          key={blog.slug}
          variants={itemVariants}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.99 }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
        >
          <Link
            href={`/blogs/${blog.slug}`}
            className="group flex min-h-18 items-center gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-4 shadow-[0_1px_2px_rgb(0_0_0_/_0.02)] transition-colors duration-200 hover:border-neutral-300 hover:bg-neutral-50 focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-4 focus-visible:outline-none sm:px-5 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-neutral-700 dark:hover:bg-neutral-900 dark:focus-visible:ring-neutral-600 dark:focus-visible:ring-offset-neutral-950"
          >
            {/* <span className="w-5 shrink-0 font-mono text-[10px] text-neutral-400 tabular-nums dark:text-neutral-600">
              {String(index + 1).padStart(2, "0")}
            </span> */}
            <div className="min-w-0 flex-1">
              <h2 className="text-sm mx-1 leading-6 font-medium tracking-[-0.015em] text-neutral-800 transition-colors group-hover:text-neutral-950 sm:text-[15px] dark:text-neutral-200 dark:group-hover:text-white">
                {blog.title}
              </h2>

              <div className="mt-2.5 flex flex-col justify-center items-start gap-x-3 gap-y-2">
                {blog.tags && blog.tags.length > 0 && (
                  <ul className="flex flex-wrap gap-1.5" aria-label="Topics">
                    {blog.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md bg-neutral-100 px-2 py-0.5 text-[11px] font-medium text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
                {blog.date && (
                  <time
                    dateTime={blog.date}
                    className="inline-flex items-center mx-1 gap-1.5 text-[11px] text-neutral-400 dark:text-neutral-500"
                  >
                    <CalendarDays className="size-3.5" />
                    {displayDate(blog.date)}
                  </time>
                )}
              </div>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1.5 text-xs font-medium text-neutral-400 transition-all duration-200 group-hover:gap-2 group-hover:text-neutral-700 dark:text-neutral-600 dark:group-hover:text-neutral-300">
              <span className="hidden sm:inline">Read more</span>
              <ArrowRight className="size-4" />
            </span>
          </Link>
        </MotionDiv>
      ))}
    </MotionDiv>
  );
}
