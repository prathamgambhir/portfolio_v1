import { cn } from "@/lib/utils";

export default function DottedTitle({ children, className }: { children: React.ReactNode , className?: string }) {
  return (
    <div className={cn("pb-9 flex", className)}>
      <h2 className="card-title ">
        <div className="corner corner-tl"></div>{" "}
        <div className="corner corner-tr"></div>{" "}
        <div className="corner corner-bl"></div>{" "}
        <div className="corner corner-br"></div>
        {children}
      </h2>
    </div>
  );
}
