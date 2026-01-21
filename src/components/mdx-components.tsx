import Image from "next/image";
import React from "react";

export const ProjectComponents = {
  // --- MEDIA ---
  img: ({ src, alt, ...props }: any) => (
    <div className="my-8">
      <Image
        src={src}
        alt={alt}
        width={800}
        height={400}
        className="rounded-lg border border-zinc-100 dark:border-zinc-800/50"
        {...props}
      />
      {alt && (
        <p className="mt-2 text-center text-[11px] font-medium tracking-tight text-zinc-400 uppercase">
          {alt}
        </p>
      )}
    </div>
  ),

  // --- TYPOGRAPHY ---
  h1: ({ children, ...props }: any) => (
    <h1
      className="mb-4 text-5xl max-w-3xl leading-snug font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: any) => (
    <h2
      className="mt-8 mb-3 text-xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: any) => (
    <h3
      className="mt-6 mb-2 text-lg font-medium text-zinc-800 dark:text-zinc-200"
      {...props}
    >
      {children}
    </h3>
  ),
  p: ({ children, ...props }: any) => (
    <p
      className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-400/90"
      {...props}
    >
      {children}
    </p>
  ),

  // for strong text did with **
  strong: ({ children, ...props }: any) => (
    <strong className="text-zinc-900 dark:text-zinc-50" {...props}>
      {children}
    </strong>
  ),

  // --- LISTS ---
  ul: ({ children, ...props }: any) => (
    <ul className="mb-4 ml-1 space-y-1.5" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: any) => (
    <ol
      className="mb-4 ml-5 list-decimal space-y-1.5 text-zinc-600 dark:text-zinc-400"
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ children, ...props }: any) => (
    <li
      className="flex items-start gap-2.5 text-[0.95rem] leading-normal text-zinc-600 dark:text-zinc-400"
      {...props}
    >
      <span className="text-xl text-zinc-600 select-none dark:text-zinc-700">
        •
      </span>
      <span className="my-0.5 flex-1">{children}</span>
    </li>
  ),

  hr: ({ ...props }: any) => (
    <hr className="my-8 border-zinc-100 dark:border-zinc-900" {...props} />
  ),

  // --- CODE BLOCKS ---
  pre: ({ children, ...props }: any) => {
    const getTextContent = (node: React.ReactNode): string => {
      if (typeof node === "string") return node;
      if (typeof node === "number") return String(node);
      if (React.isValidElement(node) && node.props) {
        return getTextContent((node.props as any).children);
      }
      if (Array.isArray(node)) return node.map(getTextContent).join("");
      return "";
    };

    return (
      <div className="group relative mb-6">
        <pre
          className="overflow-x-auto rounded-lg border border-zinc-100 bg-zinc-50/50 p-4 font-mono text-[13px] leading-6 dark:border-zinc-800/60 dark:bg-zinc-900/40"
          {...props}
        >
          {children}
        </pre>
      </div>
    );
  },
  code: ({ children, className, ...props }: any) => {
    if (className?.includes("language-")) {
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    }
    return (
      <code
        className="rounded border border-zinc-200/50 bg-zinc-100 px-1.5 py-0.5 font-mono text-[0.8rem] text-zinc-900 dark:border-zinc-700/30 dark:bg-zinc-800/50 dark:text-zinc-200"
        {...props}
      >
        {children}
      </code>
    );
  },

  // --- QUOTES ---
  blockquote: ({ children, ...props }: any) => (
    <blockquote
      className="my-6 border-l-[3px] border-zinc-200 py-0.5 pl-4 text-zinc-500 italic dark:border-zinc-800 dark:text-zinc-400"
      {...props}
    >
      {children}
    </blockquote>
  ),
};
