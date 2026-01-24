"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import { routes } from "@/config/navbar";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    // 1. Fixed positioning ensures it stays at the top of the screen
    // 2. 'left-0 right-0' combined with 'mx-auto' and 'max-w-3xl' keeps it aligned with your Container
    <nav className="pointer-events-none fixed top-0 right-0 left-0 z-50 mx-auto max-w-3xl px-4">
      <div className="pointer-events-auto relative flex h-22 w-full items-center justify-center px-0.5">
        <div
          className={cn(
            "section-seprate flex h-22 w-full items-center px-4 pt-1",
            // Glassmorphism effect
            "border-black/10 bg-white/70 backdrop-blur-sm",
            "dark:border-white/10 dark:bg-neutral-900/70 dark:backdrop-blur-md",
          )}
        >
          <motion.div whileTap={{ scale: 0.85 }}>
            <Avatar
              className="ml-4 size-13 rounded-lg border-2 border-neutral-700 shadow shadow-black/20 dark:border-neutral-300 dark:shadow-white/20 cursor-pointer"
              onClick={() => router.push("/")}
            >
              <AvatarImage src="/avatar.jpeg" className="object-cover" />
              <AvatarFallback>PG</AvatarFallback>
            </Avatar>
          </motion.div>

          <div className="ml-auto flex items-center gap-4">
            <div className="hidden items-center md:flex">
              {routes.map((route) => (
                <Link
                  href={route.href}
                  key={route.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium text-neutral-900 transition-colors hover:text-neutral-500",
                    "dark:text-white/90 dark:hover:text-white/75",
                  )}
                >
                  {route.label}
                </Link>
              ))}
            </div>
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="button-inset flex size-9 items-center justify-center rounded-md md:hidden dark:border-neutral-800"
            >
              {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={{
                initial: {
                  opacity: 0,
                  height: 0,
                },
                animate: {
                  opacity: 1,
                  height: "auto",
                  transition: {
                    duration: 0.3,
                    ease: "linear",
                    staggerChildren: 0.1,
                    delayChildren: 0.08,
                  },
                },
                exit: {
                  opacity: 0,
                  height: 0,
                  transition: { duration: 0.2, ease: "easeOut" },
                },
              }}
              style={{
                overflow: "hidden",
              }}
              className="absolute top-21 right-0 left-0 mx-0.5 flex flex-col items-center gap-1 rounded-b-xl border-y border-dashed border-black/10 bg-white/70 p-2 py-4 backdrop-blur-sm md:hidden dark:border-white/10 dark:bg-neutral-900/70 dark:backdrop-blur-md"
            >
              {routes.map((route) => (
                <motion.div
                  key={route.href}
                  variants={{
                    initial: { opacity: 0, x: -10, filter: "blur(5px)" },
                    animate: { opacity: 1, x: 0, filter: "blur(0px)" },
                  }}
                >
                  <Link
                    href={route.href}
                    onClick={() => setIsOpen(false)}
                    className="flex h-12 p-4 text-sm font-bold text-neutral-500 transition-all hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                  >
                    {route.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
