import { MapPin } from "lucide-react";
import Image from "next/image";
import ProfileImage from "../../../public/profile.jpeg";
import { cn } from "@/lib/utils";
import LiveClock from "./live-clock";
import Link from "next/link";
import { socialLinks } from "@/config/hero";
import {MotionDiv} from "../motion-div";
import { containerVariants, itemVariants } from "@/lib/stagger-animate";

export default function Hero() {
  return (
    <MotionDiv variants={containerVariants} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-100px" }}>
      {/* dummy div to create space between navbar and hero */}
      <div className="pt-20"></div>
      <div className="px-6 md:px-10 py-8 section-seprate">
        
        {/* name and pfp */}
        <div className="flex justify-between">
          <MotionDiv variants={itemVariants} className="flex flex-col md:pt-6 gap-1">
            <div className="text-xs font-medium text-neutral-500 pl-1 flex gap-6 items-center">
              Hey, I am
            </div>
            <div className="text-3xl md:text-4xl font-bold flex gap-4 tracking-tighter">
              Pratham Gambhir
              <button
                className={cn(
                  "hidden md:flex text-[10px]/tight h-5 tracking-normal font-medium self-end md:px-2 items-center md:gap-1 button-inset"
                )}
              >
                <span className="relative flex size-2 items-center justify-center">
                  <span className="availability-ping"></span>
                  <span className="availability-pulse"></span>
                </span>
                Open to work
              </button>
            </div>
            <div className="flex items-center gap-2 text-sm lg:text-md font-medium text-neutral-800 dark:text-neutral-400">
              <MapPin className="size-4" /> Delhi, India{" "}
              <span>
                <LiveClock />
              </span>
            </div>
            {/* mobile open to work */}
            <button
              className={cn(
                "flex md:hidden text-[10px]/tight h-5 tracking-tighter font-medium self-start mt-2 px-1 items-center gap-1 button-inset"
              )}
            >
              <span className="relative flex size-2 items-center justify-center">
                <span className="availability-ping"></span>
                <span className="availability-pulse"></span>
              </span>
              <span className="tracking-tigher">Open to work</span>
            </button>
          </MotionDiv>

          {/* pfp */}
          <MotionDiv 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }} // Subtle interaction
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="border border-black h-24 md:h-32 w-auto shadow-md rounded-3xl dark:border-neutral-200 dark:shadow-neutral-700 overflow-hidden"
          >
            <Image
              src={ProfileImage}
              alt="pfp"
              width={100}
              height={100}
              className="size-24 md:size-32 rounded-3xl object-cover object-center"
            />
          </MotionDiv>
        </div>

        {/* about */}
        <MotionDiv variants={itemVariants} className="pt-6 md:pt-8 text-sm/80 md:text-sm text-neutral-700 dark:text-neutral-400">
          <p className="tracking-tighter leading-7">
            Yeah! I'm a{" "}
            <span className="about-text-span">Full Stack Developer</span>. Sounds
            fancy, right? But here's the actual part-- I enjoy building things
            that do something useful. From creating modern websites using{" "}
            <span className="about-skill-span">
              <Image src={`/icons/react.svg`} alt={`react`} width={20} height={20} className="size-4" />
              React
            </span>
            ,{" "}
            <span className="about-skill-span">
              <Image src={`/icons/nextjs.svg`} alt={`nextjs`} width={20} height={20} className="size-4 dark:bg-white dark:rounded-md" />
              NextJs
            </span>
            ,{" "}
            <span className="about-skill-span">
              <Image src={`/icons/express.svg`} alt={`express`} width={20} height={20} className="size-4 dark:bg-white dark:rounded-md" />
              Express
            </span>
            &nbsp;and&nbsp;
            <span className="about-skill-span">
              <Image src={`/icons/typescript.svg`} alt={`typescript`} width={20} height={20} className="size-4" />
              Typescript
            </span>{" "}
            backed by{" "}
            <span className="about-skill-span">
              <Image src={`/icons/mongodb.svg`} alt={`mongodb`} width={20} height={20} className="size-4" />
              MongoDB
            </span>
            &nbsp;and&nbsp;
            <span className="about-skill-span">
              <Image src={`/icons/postgresql.svg`} alt={`postgresql`} width={20} height={20} className="size-4" />
              Postgresql
            </span>{" "}
            to shaping clean APIs or polishing FrontEnd interactions. I enjoy
            turning ideas into working products and Yup! I breathe{" "}
            <span className="about-text-span">code</span> most of the time.
          </p>
        </MotionDiv>

        {/* Links */}
        <MotionDiv variants={itemVariants} className="flex items-center gap-2 text-sm/relaxed w-full pt-6">
          {socialLinks.map((link, index) => (
            <div key={index} className="flex items-center gap-2">
              <Link
                href={link.href}
                target="_blank"
                className="links-span flex items-center gap-2 py-2 hover:opacity-70 transition-opacity"
              >
                <Image
                  src={`/icons/${link.icon}`}
                  alt={`${index}`}
                  width={20}
                  height={20}
                  className={cn(
                    "size-4.5 dark:bg-neutral-100 dark:rounded-sm",
                    index === 0 ? "size-3.5" : ""
                  )}
                />
                {link.label && <span>{link.label}</span>}
              </Link>
              {index === 0 && <span className="text-muted-foreground mx-1">OR</span>}
              {index === 1 && <span className="text-muted-foreground mx-1">|</span>}
            </div>
          ))}
        </MotionDiv>
      </div>
    </MotionDiv>
  );
}