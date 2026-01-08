"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunMediumIcon } from "lucide-react";

export const ThemeToggle = () => {
  const { resolvedTheme: theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wait until mounted on client to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="p-2 h-10 w-10" />; // Empty box while loading
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="border border-black/20 rounded-full inset-shadow-sm inset-shadow-black/10 dark:border-white/10 dark:inset-shadow-white/10"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <SunMediumIcon className="size-5 text-neutral-800 dark:text-white/90 rotate-0 opacity-0 dark:rotate-360 dark:opacity-100 transition-all duration-500" />
      ) : (
        <MoonIcon className="size-5 text-neutral-800 dark:text-white/90 rotate-360 opacity-100 dark:rotate-0 dark:opacity-0 transition-all duration-500" />
      )}
    </Button>
  );
};
