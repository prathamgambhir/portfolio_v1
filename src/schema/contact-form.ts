import * as z from "zod";

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(50, "Name must be less than 50 characters"),
  email: z
    .string()
    .email("Invalid email")
    .min(1, "Email is required")
    .regex(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format",
    ),
  service: z.string(),
  message: z
    .string()
    .min(1, "Message is required")
    .max(200, "Message must be less than 250 characters"),
});
