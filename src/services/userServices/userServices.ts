import generateUniqueId from "generate-unique-id";
import { userTypes } from "../../types/user";
import { oneTimePassword } from "../../utils/oneTimePassword";
import { USER } from "../../repositories/user_Repositories/Users";
import { MailSender } from "../../utils/nodemail";
import { passWordEncDec } from "../../utils/passwordUtils";


export class userServices{
    AddUserDetails=async(name:string,
        email:string,
        password:string,
        phone:number)=>{
        try {
            
            const ids=generateUniqueId({
                length:10,
                useLetters:false,
                useNumbers:true
            })
            const otp=await oneTimePassword();
            const MailMessage=await MailSender(email,otp);
            const haspassword=await passWordEncDec.encryption(password)
            const userData={
                id:ids,
                username:name,
                email:email,
                password:haspassword||"",
                phone:phone,
                otp:otp,
                verified:false,
            }
            console.log(userData);
            
            
            const PostUserDetails=await USER.add(userData)
         return PostUserDetails
            

        } catch (error) {
            console.error(error);
            return error
        }
    }
}

