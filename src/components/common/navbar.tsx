import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

const routes = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" }
];

const Navbar = () => {
  return (
    // 1. Fixed positioning ensures it stays at the top of the screen
    // 2. 'left-0 right-0' combined with 'mx-auto' and 'max-w-3xl' keeps it aligned with your Container
    <nav className="fixed top-0 left-0 right-0 z-50 mx-auto max-w-3xl px-4 pointer-events-none">
      <div className="h-22 w-full flex items-center px-1 justify-center pointer-events-auto">
        <div
          className={cn(
            "h-22 w-full flex items-center px-4 pt-1 section-seprate",
            // Glassmorphism effect
            "bg-white/70 backdrop-blur-sm border-black/10",
            "dark:bg-neutral-900/70 dark:backdrop-blur-md dark:border-white/10"
          )}
        >
          <Avatar className="size-10">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>PG</AvatarFallback>
          </Avatar>

          <div className="ml-auto flex items-center gap-4">
            <div className="hidden md:flex items-center">
              {routes.map((route) => (
                <Link
                  href={route.href}
                  key={route.href}
                  className={cn(
                    "text-sm font-medium px-3 py-2 transition-colors text-neutral-900 hover:text-neutral-500",
                    "dark:text-white/90 dark:hover:text-white/75"
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