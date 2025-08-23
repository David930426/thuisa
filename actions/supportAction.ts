"use server"
import nodemailer from "nodemailer";
import { SuggestSchema } from "@/actions/schema";

export type ComplainState = {
  ok: boolean;
  message: string;
  fieldErrors?: Record<string, string[]>;
};
// Check the avalibility of the email, make it seperate, so it not repeat full function
let transporter: nodemailer.Transporter | null = null;

function getTransporter() {
  if (transporter) return transporter;
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: String(process.env.SMTP_SECURE ?? "true") === "true",
    auth: { user: process.env.SMTP_USER!, pass: process.env.SMTP_PASS! },
  });
  return transporter;
}

export async function sendSuggest(
  _prev: ComplainState,
  formData: FormData
): Promise<ComplainState> {
  // Take all the data from the form
  const raw = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    subject: String(formData.get("subject") ?? ""),
    message: String(formData.get("message") ?? ""),
    category: String(formData.get("category") ?? "other"),
  };

  // Check the data by using schema and zod, throw the error if there aby error
  const parsed = SuggestSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: Record<string, string[]> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      (fieldErrors[key] ??= []).push(issue.message);
    }
    return { ok: false, message: "Please fix the errors.", fieldErrors };
  }

  // Take the data that already being parsed by zod
  const data = parsed.data;

  // Send the data by using email
  try {
    const transporter = getTransporter();
    await transporter.sendMail({
      from: process.env.MAIL_FROM!,
      to: process.env.MAIL_TO!,
      replyTo: `${data.name} <${data.email}>`,
      subject: `[Complaint] ${data.subject} (${data.category})`,
      text: `Category: ${data.category}
From: ${data.name} <${data.email}>
Subject: ${data.subject}

${data.message}`,
    });

    return { ok: true, message: "Thanks! Your complaint was sent." };
  } catch (e) {
    console.error("Mail error:", e);
    return {
      ok: false,
      message: "We couldn’t send your message. Please try again later.",
    };
  }
}
