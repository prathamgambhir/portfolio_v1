"use client";

import { useForm } from "react-hook-form";
import { mailForm } from "@/types/mail-form";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { useState } from "react";
import axios from "axios";
import { ContactFormSchema } from "@/schema/contact-form";
import { zodResolver } from '@hookform/resolvers/zod';

export default function ContactCard() {
  const [submitting, setSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: {errors} } = useForm({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: mailForm) => {
    setSubmitting(true);

    const payload = {
      service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      template_params: {
        from_name: data.name,
        from_email: data.email,
        service: data.service,
        message: data.message,
      },
    };

    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        payload,
      );

      // console.log(res);
      if(res.status === 200){
        toast.success("Email sent successfully");
        reset();
      }
    } catch (error: any) {
      console.error("EmailJs Error", error.response.data || error.message);
      toast.error("Failed to send mail. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="font-poppins flex w-full max-w-lg flex-col gap-4 rounded-2xl border border-neutral-300 p-5"
    >
      <div className="contact-form-div">
        <label className="contact-form-label">Name </label>
        <input
          {...register("name")}
          className="contact-form-input"
          placeholder="Enter your name"
        />
        {errors.name && <span className="text-red-500 text-xs mt-1 px-1">{errors.name.message}</span>}
      </div>
      <div className="contact-form-div">
        <label className="contact-form-label">Email</label>
        <input {...register("email")} className="contact-form-input" />
        {errors.email && <span className="text-red-500 text-xs mt-1 px-1">{errors.email.message}</span>}
      </div>
      <div className="contact-form-div">
        <label className="contact-form-label">Service you want</label>
        <select {...register("service")} className="contact-form-input">
          <option value="Web Development">Web Development</option>
          <option value="other">other</option>
        </select>
        {errors.service && <span className="text-red-500 text-xs mt-1 px-1">{errors.service.message}</span>}
      </div>
      <div className="contact-form-div">
        <label className="contact-form-label">Message</label>
        <textarea
          {...register("message")}
          className="contact-form-input min-h-30 resize-none overflow-scroll p-2"
        />
        {errors.message && <span className="text-red-500 text-xs mt-1 px-1">{errors.message.message}</span>}
      </div>
      <Button
        type="submit"
        className="mx-auto max-w-16 border border-neutral-400 px-5 py-1 text-center dark:border-neutral-400"
      >
        Send
      </Button>
    </form>
  );
}
