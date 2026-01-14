import { cn } from "@/lib/utils";
import MotionDiv from "../motion-div";
import { easeInOut } from "motion/react";

export default function DottedTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <MotionDiv
      initial={{
        opacity: 0,
        y: 20,
        filter: "blur(10px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
          duration: 0.3,
        },
      }}
      viewport={{ once: true, margin: "-100px" }}
      className={cn("flex pb-9", className)}
    >
      <h2 className="card-title">
        <div className="corner corner-tl"></div>{" "}
        <div className="corner corner-tr"></div>{" "}
        <div className="corner corner-bl"></div>{" "}
        <div className="corner corner-br"></div>
        {children}
      </h2>
    </MotionDiv>
  );
}
