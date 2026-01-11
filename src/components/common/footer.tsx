import { CopyrightIcon, Eye, Heart } from "lucide-react";
import Container from "./container";

export default function Footer() {
  return (
    <Container>
      <footer className="px-6 md:px-10 py-20 flex flex-col items-center justify-evenly gap-20  md:gap-28">
        {/* Geeta quote */}
        <div className="relative max-w-2xl w-full mx-auto border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/30 rounded-3xl px-6 py-5 md:px-9 md:py-7 overflow-hidden">
          <span className="absolute top-1 md:top-2 left-2  text-neutral-200 dark:text-neutral-800 select-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="size-20 md:size-24"
              viewBox="0 0 16 16"
            >
              <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
            </svg>
          </span>
          <div className="relative z-10 selection:bg-neutral-300 flex flex-col gap-4 tracking-tight">
            <div className="text-neutral-800 dark:text-neutral-400 italic text-sm md:text-lg text-center md:leading-relaxed font-medium">
              "Man is made by his belief. As he believes,<br /> so he is."
            </div>
            <div className="text-neutral-500 dark:text-neutral-500 text-right font-medium text-sm md:text-md">
              — Bhagavad Gita
            </div>
          </div>
        </div>

        {/* Counter */}
        <div className="flex justify-center w-full">
          <div className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
            <Eye className="size-5 text-neutral-500" />
            <div className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 font-medium">
              You are the{" "}
              <span className="text-neutral-900 dark:text-neutral-100 font-bold tabular-nums">
                27,056th
              </span>{" "}
              visitor
            </div>
          </div>
        </div>

        {/* rights */}
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="flex items-center gap-1.5 text-sm md:text-base text-neutral-500 dark:text-neutral-400">
            Design & Developed with{" "}
            <Heart className="size-4 fill-neutral-500 dark:fill-neutral-50" />{" "}
            by{" "}
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              Pratham Gambhir
            </span>
          </div>
          <div className="flex items-center gap-1 text-xs md:text-sm text-neutral-400 dark:text-neutral-500">
            <CopyrightIcon className="size-3.5" />
            2026. All Rights Reserved
          </div>
        </div>
      </footer>
    </Container>
  );
}
