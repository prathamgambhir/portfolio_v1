import DottedTitle from "@/components/common/dotted-tittle";
import ContactCard from "@/components/contact/contact-form";

export default function Contact() {
  return (
    <div className="section-seprate flex flex-col px-4 py-7 pb-10">
      <div className="flex flex-col items-center gap-2 py-3 pb-8">
        <div className="text-[12px] md:text-xs ">Let's connect</div>
        <div className="flex flex-col gap-1 items-center text-xl tracking-tight text-neutral-700 md:text-2xl dark:text-neutral-200">
          <span className="">Got a Project in Mind?</span>
          <span className="text-xs before:mr-2 before:text-neutral-400 before:content-['--------'] after:ml-2 after:text-neutral-400 after:content-['--------']">
            or
          </span>
          <span>Just Say Hi</span>
        </div>
      </div>
      <div className="flex justify-center p-3">
        <ContactCard />
      </div>
    </div>
  );
}
