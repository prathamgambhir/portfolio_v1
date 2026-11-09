"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export default function MdxImage({
  src,
  alt,
  className,
  priority = false,
}: {
  src?: string;
  alt?: string;
  className?: string;
  priority?: boolean;
}) {
  const [hidden, setHidden] = useState(false);

  if (!src || hidden) return null;

  return (
    <span className={cn("animate-item-in my-7 block max-w-full", className)}>
      <img
        src={src}
        alt={alt ?? ""}
        loading={priority ? "eager" : "lazy"}
        onError={() => setHidden(true)}
        className="block h-auto max-w-full rounded-xl border border-neutral-200 bg-neutral-50 object-cover shadow-sm dark:border-neutral-800 dark:bg-neutral-900/40"
      />
      {alt && (
        <span className="mt-2 block text-center text-xs font-medium tracking-tight text-neutral-400 dark:text-neutral-500">
          {alt}
        </span>
      )}
    </span>
  );
}
