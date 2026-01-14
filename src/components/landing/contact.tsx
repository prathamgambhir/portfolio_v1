import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Calendar } from "lucide-react";
import MotionDiv from "../motion-div";
import { containerVariants, itemVariants } from "@/lib/stagger-animate";

export default function Contact() {
  return (
    <MotionDiv
      className="section-seprate font-poppins px-6 py-20"
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }} // Triggers slightly before reaching the element
    >
      <div className="flex flex-col items-center">
        <MotionDiv variants={itemVariants} className="text-sm text-neutral-400">
          Scrolled this far?
        </MotionDiv>

        <MotionDiv
          variants={itemVariants}
          className="text-4xl font-bold text-neutral-800 dark:text-neutral-100"
        >
          Lets Connect
        </MotionDiv>

        <MotionDiv
          variants={itemVariants}
          className="flex flex-col items-center py-6 text-center text-lg text-neutral-600 dark:text-neutral-400"
        >
          <div>Want to discuss a project or just want to say hi?</div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            just reach out to me via{" "}
            <Link href="https://x.com/_PrathamGambhir" target="_blank">
              <MotionDiv
                whileHover={{ scale: 1.05 }}
                className="about-skill-span flex cursor-pointer items-center gap-2 text-sm font-semibold"
              >
                <Image
                  src="/icons/x.svg"
                  alt="x"
                  width={20}
                  height={20}
                  className="size-4 rounded-md object-contain dark:bg-neutral-100"
                />
                DM
              </MotionDiv>
            </Link>
            or{" "}
            <Link href="/contact">
              <MotionDiv
                whileHover={{ scale: 1.05 }}
                className="about-skill-span flex cursor-pointer items-center gap-2 text-sm font-semibold"
              >
                <Image
                  src="/icons/mail.svg"
                  alt="mail"
                  width={20}
                  height={20}
                  className="size-4.5 rounded-md object-contain dark:bg-neutral-100"
                />
                Email me
              </MotionDiv>
            </Link>
          </div>
        </MotionDiv>

        <MotionDiv
          variants={itemVariants}
          className="text-lg before:mr-2 before:text-neutral-400 before:content-['--------'] after:ml-2 after:text-neutral-400 after:content-['--------']"
        >
          OR
        </MotionDiv>

        <MotionDiv
          variants={itemVariants}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6"
        >
          <Link href="/contact">
            <Button className="links-span flex items-center gap-2">
              <Calendar className="size-4" />
              <span>Book a call</span>
            </Button>
          </Link>
        </MotionDiv>
      </div>
    </MotionDiv>
  );
}
