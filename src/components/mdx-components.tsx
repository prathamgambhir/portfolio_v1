import React from "react";
import MdxImage from "@/components/blogs/mdx-image";
import { CodeBlock } from "@/components/ui/code-block";

function getCodeText(node: React.ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(getCodeText).join("");
  if (React.isValidElement<{ children?: React.ReactNode }>(node)) {
    return getCodeText(node.props.children);
  }
  return "";
}

export const MdxComponents = {
  img: ({ src, alt }: { src?: string; alt?: string }) => (
    <MdxImage src={src} alt={alt} />
  ),

  h1: ({ children, ...props }: React.ComponentProps<"h1">) => (
    <h1
      className="animate-item-in mt-2 mb-5 text-2xl leading-[1.15] font-semibold tracking-[-0.03em] text-neutral-900 md:text-3xl dark:text-neutral-50"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: React.ComponentProps<"h2">) => (
    <h2
      className="animate-item-in mt-10 mb-3 text-xl leading-snug font-semibold tracking-[-0.025em] text-neutral-900 md:text-2xl dark:text-neutral-100"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: React.ComponentProps<"h3">) => (
    <h3
      className="animate-item-in mt-8 mb-2 text-lg leading-snug font-semibold tracking-tight text-neutral-800 dark:text-neutral-200"
      {...props}
    >
      {children}
    </h3>
  ),
  p: ({ children, ...props }: React.ComponentProps<"p">) => (
    <p
      className="animate-item-in mb-5 text-sm leading-7 text-neutral-600 md:text-[15px] dark:text-neutral-400"
      {...props}
    >
      {children}
    </p>
  ),
  a: ({ children, href, ...props }: React.ComponentProps<"a">) => (
    <a
      href={href}
      className="font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-900 dark:text-neutral-100 dark:decoration-neutral-700 dark:hover:decoration-neutral-200"
      {...props}
    >
      {children}
    </a>
  ),
  strong: ({ children, ...props }: React.ComponentProps<"strong">) => (
    <strong
      className="font-semibold text-neutral-900 dark:text-neutral-50"
      {...props}
    >
      {children}
    </strong>
  ),
  em: ({ children, ...props }: React.ComponentProps<"em">) => (
    <em className="text-neutral-700 italic dark:text-neutral-300" {...props}>
      {children}
    </em>
  ),

  ul: ({ children, ...props }: React.ComponentProps<"ul">) => (
    <ul
      className="animate-item-in mb-6 ml-5 list-disc space-y-2 text-sm leading-7 text-neutral-600 md:text-[15px] dark:text-neutral-400"
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: React.ComponentProps<"ol">) => (
    <ol
      className="animate-item-in mb-6 ml-5 list-decimal space-y-2 text-sm leading-7 text-neutral-600 md:text-[15px] dark:text-neutral-400"
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ children, ...props }: React.ComponentProps<"li">) => (
    <li
      className="pl-1 marker:text-neutral-400 dark:marker:text-neutral-600"
      {...props}
    >
      {children}
    </li>
  ),

  hr: ({ ...props }: React.ComponentProps<"hr">) => (
    <hr
      className="my-12 border-dashed border-neutral-200 dark:border-neutral-800"
      {...props}
    />
  ),

  pre: ({ children }: React.ComponentProps<"pre">) => {
    const codeElement = React.Children.toArray(children)[0];
    const languageClass = React.isValidElement<{ className?: string }>(
      codeElement,
    )
      ? codeElement.props.className
      : undefined;
    const language = languageClass?.match(/language-([^\s]+)/)?.[1];

    return (
      <CodeBlock code={getCodeText(children)} language={language}>
        {children}
      </CodeBlock>
    );
  },
  code: ({ children, className, ...props }: React.ComponentProps<"code">) => {
    if (className?.includes("language-")) {
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    }

    return (
      <code
        className="rounded-md border border-neutral-200 bg-neutral-100 px-1.5 py-0.5 font-mono text-[0.8rem] text-neutral-800 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200"
        {...props}
      >
        {children}
      </code>
    );
  },

  blockquote: ({ children, ...props }: React.ComponentProps<"blockquote">) => (
    <blockquote
      className="animate-item-in my-7 border-l-2 border-neutral-300 py-0.5 pl-4 text-sm leading-7 text-neutral-500 italic md:text-[15px] dark:border-neutral-700 dark:text-neutral-400"
      {...props}
    >
      {children}
    </blockquote>
  ),
};

export const ProjectComponents = MdxComponents;
