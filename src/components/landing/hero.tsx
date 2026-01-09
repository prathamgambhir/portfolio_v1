import { MapPin } from "lucide-react";
import Image from "next/image";
import ProfileImage from "../../../public/profile.jpeg";
import { cn } from "@/lib/utils";
import LiveClock from "./live-clock";
import TypescriptIcon from "../Icons/typescript";
import ReactIcon from "../Icons/react";
import NextjsIcon from "../Icons/nextjs";
import ExpressIcon from "../Icons/express";
import MongoDBIcon from "../Icons/mongodb";
import PostgresqlIcon from "../Icons/postgresql";
import GithubIcon from "../Icons/github";
import LinkedInIcon from "../Icons/linkedIn";
import TwitterIcon from "../Icons/twitter-x";
import MailIcon from "../Icons/email";
import ResumeIcon from "../Icons/resume";

export default function Hero() {
  return (
    <div className="px-6 md:px-10 py-8">
      {/* name and pfp */}
      <div className="flex justify-between">
        {/* name */}
        <div className="flex flex-col md:pt-6 gap-1">
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
              {/* availability dot */}
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
              "flex md:hidden text-[10px]/tight h-5 tracking-tighter font-medium self-start  mt-2 px-1 items-center gap-1 button-inset"
            )}
          >
            {/* availability dot */}
            <span className="relative flex size-2 items-center justify-center">
              <span className="availability-ping"></span>
              <span className="availability-pulse"></span>
            </span>
            <span className="tracking-tigher">Open to work</span>
          </button>
        </div>
        {/* pfp */}
        <div className="border border-black h-24 w-auto shadow-md rounded-3xl dark:border-neutral-200 dark:shadow-neutral-700">
          <Image
            src={ProfileImage}
            alt="pfp"
            width={100}
            height={100}
            className="size-24 md:size-32 rounded-3xl object-cover object-center"
          />
        </div>
      </div>
      {/* about */}
      <div className="pt-6 md:pt-8 text-sm/80 md:text-sm text-neutral-700 dark:text-neutral-400">
        <p className="tracking-tighter leading-7">
          Yeah! I'm a{" "}
          <span className="about-text-span">Full Stack Developer</span>.Sounds
          fancy, right? But here's the actual part-- I enjoy building things
          that do something useful. From creating modern websites using{" "}
          <span className="about-skill-span">
            <ReactIcon className="size-4 rounded-3xl" />
            React
          </span>
          ,{" "}
          <span className="about-skill-span">
            <NextjsIcon className="size-4 rounded-3xl dark:bg-white" />
            NextJs
          </span>
          ,{" "}
          <span className="about-skill-span">
            <ExpressIcon className="size-4 rounded-3xl dark:bg-white" />
            Express
          </span>
          &nbsp;and&nbsp;
          <span className="about-skill-span">
            <TypescriptIcon className="size-4 rounded-3xl" />
            Typescript
          </span>{" "}
          backed by{" "}
          <span className="about-skill-span">
            <MongoDBIcon className="size-4 rounded-3xl" />
            MongoDB
          </span>
          &nbsp;and&nbsp;
          <span className="about-skill-span">
            <PostgresqlIcon className="size-4 rounded-3xl" />
            Postgresql
          </span>{" "}
          to shaping clean APIs or polishing FrontEnd interactions.I enjoy
          turning ideas into working products and Yup! I breathe{" "}
          <span className="about-text-span">code</span> most of the time.
        </p>
      </div>
      {/* Links */}
      <div className="flex items-center gap-2 text-sm/relaxed w-full pt-6">
        <div className="links-span flex items-center gap-2 py-2"><TwitterIcon className="size-3"/>DM</div>
        <span>OR</span>
        <div  className="links-span flex items-center gap-2 py-2"><MailIcon className="size-4"/>Email Me</div>
        <span>|</span>
        <div className="links-span flex items-center gap-1 py-2"><GithubIcon className="size-4"/></div>
        <div className="links-span flex items-center gap-1 py-2"><LinkedInIcon className="size-4"/></div>
        <div className="links-span flex items-center gap-1 py-2"><ResumeIcon className="size-4"/></div>
      </div>
    </div>
  );
}
// From
//           crafting sleek, interactive UIs with React & TypeScript to designing
//           solid backends using Express and Spring Boot
