"use client";

import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { buttonVariants } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

export default function GlobalNotFound() {
  const handleHomeClick = () => {
    // This forces a full browser refresh to the home page
    window.location.href = "/";
  };

  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="flex h-screen w-full flex-col items-center justify-center gap-8 bg-white dark:bg-neutral-950">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="font-poppins text-9xl font-bold tracking-tighter text-neutral-900 dark:text-neutral-100">
              404
            </h1>
            <p className="mt-4 text-xl font-medium text-neutral-600 dark:text-neutral-400">
              Page Not Found
            </p>
            <p className="mt-2 text-sm text-neutral-500">
              The page you&apos;re looking for doesn&apos;t exist.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button
              onClick={handleHomeClick}
              className={buttonVariants({
                variant: "default",
                className: "cursor-pointer gap-2",
              })}
            >
              <Home className="size-4" />
              Go Home
            </button>
          </motion.div>
        </div>
      </body>
    </html>
  );
}
