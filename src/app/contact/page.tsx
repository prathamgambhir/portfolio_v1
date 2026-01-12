import DottedTitle from "@/components/common/dotted-tittle";
import ContactCard from "@/components/contact/contact-form";

export default function Contact() {
  return (
    <div className="section-seprate flex flex-col px-4 py-7 pb-10">
      <DottedTitle>Contact</DottedTitle>
      <div>
        <ContactCard />
      </div>
    </div>
  );
}
