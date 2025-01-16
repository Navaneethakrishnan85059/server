import nodemailer from "nodemailer"
import type { MailFormated } from "../types/mailTypes";

const transporter=nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    auth:{
        user:"navaneethakrishnan85059@gmail.com",
        pass:"yqpe axiz ijgr ssrf",
    }
})



export const MailSender=async(receivermail:string,otp:Number)=>{
try {
   const SendingMailFormat:MailFormated={
    from:"navaneethakrishnan85059@gmail.com",
    to:receivermail,
    subject:"ONE Time Password",
    text:`${otp}`
   }
   const MailData=transporter.sendMail(SendingMailFormat)
   return MailData
} catch (error) {
    console.error(error);
    
}
}