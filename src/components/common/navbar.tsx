import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Container from "./container";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

const routes = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/projects",
    label: "Projects",
  },
  {
    href: "/blogs",
    label: "Blogs",
  },
  {
    href: "/contact",
    label: "Contact",
  }
];

const Navbar = () => {
  return (
    <Container>
      <div className="h-24 w-full sticky top-0 flex items-center justify-center px-6 z-50">
        <div
          className={cn(
            "bg-white backdrop-blur-lg h-16 w-full rounded-full border border-black/20 shadow-sm flex items-center px-4 relative",
            "dark:bg-neutral-900 dark:border-white/5 dark:shadow-"
          )}
        >
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>PG</AvatarFallback>
          </Avatar>
          <div className="ml-auto flex items-center gap-4">
            <div>
              {routes.map((route) => {
                return (
                  <a
                    href={route.href}
                    key={route.href}
                    className={cn("text-sm font-medium mr-2 md:mr-4 text-neutral-900 hover:text-neutral-500",
                        "dark:text-white/90 hover:dark:text-white/75"

                    )}
                  >
                    {route.label}
                  </a>
                );
              })}
            </div>
            <div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
