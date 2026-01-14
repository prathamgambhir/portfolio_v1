import ContactForm from "@/components/contact/contact-form";
import {MotionDiv} from "@/components/motion-div";
import { containerVariants, itemVariants } from "@/lib/stagger-animate";

export default function Contact() {
  return (
    <MotionDiv
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      className="section-seprate flex flex-col px-4 py-7 pb-10"
    >
      <div className="flex flex-col items-center gap-2 py-3 pb-8">
        <MotionDiv variants={itemVariants} className="text-[12px] md:text-xs">
          Let's connect
        </MotionDiv>
        <div className="flex flex-col items-center gap-1 text-xl tracking-tight text-neutral-700 md:text-2xl dark:text-neutral-200">
          <MotionDiv variants={itemVariants} className="">
            Got a Project in Mind?
          </MotionDiv>
          <MotionDiv
            variants={itemVariants}
            className="text-xs before:mr-2 before:text-neutral-400 before:content-['--------'] after:ml-2 after:text-neutral-400 after:content-['--------']"
          >
            or
          </MotionDiv>
          <MotionDiv variants={itemVariants}>Just Say Hi</MotionDiv>
        </div>
      </div>
      {/* <MotionDiv variants={containerVariants} className="flex justify-center p-3"> */}
      <div className="flex justify-center p-3">
        <ContactForm />
      </div>
      {/* </MotionDiv> */}
    </MotionDiv>
  );
}
