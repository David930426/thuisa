import * as z from "zod";

export const SuggestSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email"),
  subject: z.string().min(3, "Subject is too short"),
  message: z.string().min(10, "Please describe your issue in more detail"),
  category: z.enum(["product", "delivery", "billing", "other"]),
});
