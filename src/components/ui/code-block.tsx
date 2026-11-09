"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  children: React.ReactNode;
  code: string;
  language?: string;
  className?: string;
}

export function CodeBlock({
  children,
  code,
  language,
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      className={cn(
        "code-block group/code relative my-6 max-w-full overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-[#111]",
        className,
      )}
    >
      <div className="flex h-9 items-center justify-between border-b border-neutral-200 bg-neutral-50 px-3 dark:border-white/8 dark:bg-white/[0.025]">
        <span className="font-mono text-[10px] font-medium tracking-wide text-neutral-500 lowercase dark:text-neutral-500">
          {language || "code"}
        </span>
        <button
          type="button"
          onClick={copyCode}
          aria-label="Copy code"
          className="inline-flex items-center gap-1.5 rounded-md px-1.5 py-1 text-[10px] font-medium text-neutral-500 transition-colors hover:bg-neutral-200 hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:outline-none dark:text-neutral-400 dark:hover:bg-white/10 dark:hover:text-white dark:focus-visible:ring-neutral-500"
        >
          {copied ? <Check className="size-3" /> : <Copy className="size-3" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="max-w-full [scrollbar-width:thin] [scrollbar-color:rgb(163_163_163)_transparent] overflow-x-auto overscroll-x-contain p-4 font-mono text-[12px] leading-6 sm:text-[13px] dark:[scrollbar-color:rgb(82_82_82)_transparent]">
        {children}
      </pre>
    </div>
  );
}
