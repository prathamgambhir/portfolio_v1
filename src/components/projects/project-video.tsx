"use client";

import { Project } from "@/types/project";
import { PlayCircleIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ProjectVideo({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false);

  // Prevents scroll when the video open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      {/* Thumbnail Container */}
      <div
        className="bg-muted group relative mb-12 flex aspect-video cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-zinc-200 shadow-2xl transition-all hover:border-zinc-400 dark:border-zinc-800"
        onClick={() => setIsOpen(true)}
      >
        {project.image && (
          <Image
            src={project.image}
            alt={project.title || "Project Image"}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:blur-[2px]"
            priority
          />
        )}

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/30">
          <PlayCircleIcon className="size-20 text-white opacity-80 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100" />
        </div>
      </div>

      {/* Video blur bg */}
      {isOpen && (
        <div
          className="animate-in fade-in fixed inset-0 z-50 mx-auto flex h-auto max-w-3xl items-center justify-center bg-white/70 p-4 backdrop-blur-sm duration-300 dark:bg-neutral-900/70"
          onClick={() => setIsOpen(false)} // Closes when clicking the backdrop
        >
          {/* stopPropagation prevents closing when clicking the video itself */}
          <div
            className="animate-in relative aspect-video w-full max-w-xl rounded-2xl border border-white/10 bg-black shadow-2xl duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={project.ytLink}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 h-full w-full rounded-2xl"
            />
            {/* Close Button for Accessibility */}
            <button
              className="absolute -top-12 right-[calc(50%-1.5rem)] text-white/80 transition-colors hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              <XIcon className="size-8 rounded-full bg-black p-2" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
