import { cn } from "@/lib/utils"; // Fixed your import path if using standard shadcn/next structure

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
        "mx-auto max-w-3xl px-4 relative", // min-h-screen ensures background covers the page
        className
      )}
      {...props}
    >
      {/* BACKGROUND DECORATION LAYER */}
      <div 
        className="absolute inset-0 -z-10 pointer-events-none" 
        aria-hidden="true"
      >
        {/* The Pattern Layer */}
        <div className={cn("absolute inset-0 bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[6px_6px] opacity-20",
          "dark:bg-[repeating-linear-gradient(315deg,var(--pattern-fg-dark)_0,var(--pattern-fg-dark)_1px,transparent_0,transparent_50%)]"
        )} />
        
        {/* Outer Borders (Pseudo-elements from your original code) */}
        <div className="absolute inset-0 border-x border-(--pattern-fg)/70" />
        {/* <div className="absolute inset-0 border-y border-(--pattern-fg)" /> */}
      </div>

      {/* CONTENT LAYER */}
      <div
        className={cn(
          "relative z-10 max-w-2.5xl mx-auto bg-white dark:bg-neutral-950",
          "border-x border-(--pattern-fg)/70" // Internal borders
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;