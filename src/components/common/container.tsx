import { cn } from "@/app/lib/utils";

const Container = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl px-4 relative bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[6px_6px]",
        // border around pattern
        "before:absolute before:top-0 before:border-y before:border-(--pattern-fg)",
        "after:absolute after:inset-y-0 after:left-0 after:right-0 after:border-x after:border-(--pattern-fg)"
      )}
    >
      <div
        className={cn(
          "relative max-w-2.5xl mx-auto bg-white dark:bg-neutral-950",
          "before:absolute before:top-0 before:border-y before:border-(--pattern-fg)",
          "after:absolute after:inset-y-0 after:left-0 after:right-0 after:border-x after:border-(--pattern-fg)"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
