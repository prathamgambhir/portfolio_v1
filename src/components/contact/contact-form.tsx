"use client";

import { useForm } from "react-hook-form";
import { mailForm } from "@/types/mail-form";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { useState } from "react";
import axios from "axios";
import { ContactFormSchema } from "@/schema/contact-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
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
      if (res.status === 200) {
        toast.success("Email sent successfully");
        reset();
      }
    } catch (error: any) {
      console.error("EmailJs Error", error.response?.data || error.message);
      toast.error("Failed to send mail. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // Animation variants
  const containerVars = {
    initial: { opacity: 0, y: 20 , filter: "blur(10px)"},
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVars = {
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1 },
  };

  return (
    <motion.form
      variants={containerVars}
      initial="initial"
      animate="animate"
      onSubmit={handleSubmit(onSubmit)}
      className="font-poppins flex w-full max-w-lg flex-col gap-6 rounded-3xl border border-neutral-200 bg-white/50 p-8 shadow-xl shadow-neutral-200/40 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/50 dark:shadow-none"
    >
      <motion.div variants={itemVars} className="flex flex-col gap-1.5">
        <label className="ml-1 text-sm font-semibold text-neutral-700 dark:text-neutral-300">
          Name
        </label>
        <input
          {...register("name")}
          className="w-full rounded-xl border border-neutral-300 bg-white/50 px-4 py-2.5 transition-all outline-none focus:border-neutral-900 focus:ring-4 focus:ring-neutral-900/5 dark:border-neutral-700 dark:bg-neutral-800/50 dark:focus:border-neutral-100 dark:focus:ring-neutral-100/5"
          placeholder="Enter your name"
        />
        {errors.name && (
          <span className="mt-1 px-1 text-[11px] font-medium text-red-500">
            {errors.name.message}
          </span>
        )}
      </motion.div>

      <motion.div variants={itemVars} className="flex flex-col gap-1.5">
        <label className="ml-1 text-sm font-semibold text-neutral-700 dark:text-neutral-300">
          Email
        </label>
        <input
          {...register("email")}
          className="w-full rounded-xl border border-neutral-300 bg-white/50 px-4 py-2.5 transition-all outline-none focus:border-neutral-900 focus:ring-4 focus:ring-neutral-900/5 dark:border-neutral-700 dark:bg-neutral-800/50 dark:focus:border-neutral-100 dark:focus:ring-neutral-100/5"
          placeholder="email@example.com"
        />
        {errors.email && (
          <span className="mt-1 px-1 text-[11px] font-medium text-red-500">
            {errors.email.message}
          </span>
        )}
      </motion.div>

      <motion.div variants={itemVars} className="flex flex-col gap-1.5">
        <label className="ml-1 text-sm font-semibold text-neutral-700 dark:text-neutral-300">
          Service you want
        </label>
        <select
          {...register("service")}
          className="w-full cursor-pointer rounded-xl border border-neutral-300 bg-white/50 px-4 py-2.5 transition-all outline-none focus:border-neutral-900 focus:ring-4 focus:ring-neutral-900/5 dark:border-neutral-700 dark:bg-neutral-800/50 dark:focus:border-neutral-100 dark:focus:ring-neutral-100/5"
        >
          <option value="Web Development">Web Development</option>
          <option value="Hire Me">Hire me</option>
          <option value="other">Other</option>
        </select>
        {errors.service && (
          <span className="mt-1 px-1 text-[11px] font-medium text-red-500">
            {errors.service.message}
          </span>
        )}
      </motion.div>

      <motion.div variants={itemVars} className="flex flex-col gap-1.5">
        <label className="ml-1 text-sm font-semibold text-neutral-700 dark:text-neutral-300">
          Message
        </label>
        <textarea
          {...register("message")}
          className="min-h-35 w-full resize-none rounded-xl border border-neutral-300 bg-white/50 p-4 transition-all outline-none focus:border-neutral-900 focus:ring-4 focus:ring-neutral-900/5 dark:border-neutral-700 dark:bg-neutral-800/50 dark:focus:border-neutral-100 dark:focus:ring-neutral-100/5"
          placeholder="Tell me about your project..."
        />
        {errors.message && (
          <span className="mt-1 px-1 text-[11px] font-medium text-red-500">
            {errors.message.message}
          </span>
        )}
      </motion.div>

      <motion.div variants={itemVars} whileTap={{scale: 0.85}} className="pt-2">
        <Button
          disabled={submitting}
          type="submit"
          className="h-12 w-full rounded-xl border border-neutral-900 bg-neutral-900 text-white transition-all hover:bg-neutral-800 active:scale-[0.98] disabled:opacity-50 dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
        >
          {submitting ? "Sending..." : "Send Message"}
        </Button>
      </motion.div>
    </motion.form>
  );
}
