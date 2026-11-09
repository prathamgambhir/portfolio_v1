"use client";

import { Share } from "lucide-react";
import { toast } from "sonner";

export default function ShareButton() {
  const onShare = async () => {
    const url = window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({ url, title: document.title });
        return;
      }

      await navigator.clipboard.writeText(url);
      toast.success("Link copied");
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      toast.error("Couldn't share this post");
    }
  };

  return (
    <button
      type="button"
      onClick={onShare}
      className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-medium text-neutral-600 transition-colors hover:border-neutral-300 hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-neutral-700 dark:hover:bg-neutral-800"
    >
      <Share className="size-3.5" />
      Share
    </button>
  );
}
