import EmailTemplate from "@/components/email-template";
import { Resend } from "resend";





const resend = new Resend(process.env.RESEND_API_KEY);
export const SendEmail = async (email: string, message: string) => {
  console.log('trying to send details')
  try {
    const response = await resend.emails.send({
      from: "Contact <onboarding@resend.dev>",
      to: ["victortoyosi@gmail.com"],
      subject: "New Message from Contact Form",
      react: EmailTemplate({ email, message }),
    });
    console.log("Email sent:", response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};