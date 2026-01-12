import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import { routes } from "@/config/navbar";

const Navbar = () => {
  return (
    // 1. Fixed positioning ensures it stays at the top of the screen
    // 2. 'left-0 right-0' combined with 'mx-auto' and 'max-w-3xl' keeps it aligned with your Container
    <nav className="pointer-events-none fixed top-0 right-0 left-0 z-50 mx-auto max-w-3xl px-4">
      <div className="pointer-events-auto flex h-22 w-full items-center justify-center px-1">
        <div
          className={cn(
            "section-seprate flex h-22 w-full items-center px-4 pt-1",
            // Glassmorphism effect
            "border-black/10 bg-white/70 backdrop-blur-sm",
            "dark:border-white/10 dark:bg-neutral-900/70 dark:backdrop-blur-md",
          )}
        >
          <Avatar className="ml-4 size-13 border-2 border-neutral-700 shadow rounded-lg shadow-black/20 dark:border-neutral-300 dark:shadow-white/20">
            <AvatarImage src="/avatar.jpeg" className="object-cover" />
            <AvatarFallback>PG</AvatarFallback>
          </Avatar>

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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
