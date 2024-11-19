import nodemailer from "nodemailer"
export  const mailFunction=async(email:string,OTP:string)=>{

    interface mail{
        from:string,
        to:string,
        subject:string,
        text:string,
    }

    try {
        const transport=nodemailer.createTransport({
            service:"gmail",
            
            auth:{
                user:"navaneethakrishnan85059@gmail.com",
                pass:"qele skne kgdu ohui",
            },
            
        })


        const mailOption:mail={
            from:"navaneethakrishnan85059@gmail.com",
            to:email,
            subject:"ONE TIME PASSWORD",
            text:`one time password ${OTP }`
        }


        const mailset=await transport.sendMail(mailOption)

        return mailset
    } catch (error) {
        console.error(error);
        
    }

}
