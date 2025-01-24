import EmailTemplate from "@/components/email-template";
import { Resend } from "resend";





const resend = new Resend(process.env.RESEND_API_KEY);
export const SendEmail = async(email:string,message:string)=>{
    await resend.emails.send({
        from: 'Contact <onboarding@resend.dev>',
        to: ['victortoyosi@gmail.com'],
        subject: 'Hello World!!',
        react: EmailTemplate({email,message}),
      });

}