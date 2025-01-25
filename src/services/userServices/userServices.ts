import generateUniqueId from "generate-unique-id";
import { oneTimePassword } from "../../utils/oneTimePassword";
import { USER } from "../../repositories/user_Repositories/Users";
import { MailSender } from "../../utils/nodemail";
import { passWordEncDec } from "../../utils/passwordUtils";
import type{ userGetEmail } from "../../types/user";


export class userServices {
    AddUserDetails = async (name: string,
        email: string,
        password: string,
        phone: string) => {
        try {

            const verifiedEmail = await USER.getByEmail(email)

            if (verifiedEmail) {
                return "email Already Exist"
            }
            if(!verifiedEmail){
                const ids = generateUniqueId({
                    length: 10,
                    useLetters: false,
                    useNumbers: true
                })
                const otp = await oneTimePassword();
                const MailMessage = await MailSender(email, otp);
                const haspassword = await passWordEncDec.encryption(password)
                const userData = {
                    id: ids,
                    username: name,
                    email: email,
                    password: haspassword || "",
                    phone: phone,
                    otp: otp,

                }
                console.log(userData);


                const PostUserDetails = await USER.add(userData)
                return PostUserDetails
            }




        } catch (error) {
            console.error(error);
            return error
        }
    }

    GetUserByEmail = async (email:string) => {
        try {
            const GetUserByEmail = await USER.getByEmail(email)
            if (GetUserByEmail) {

                return GetUserByEmail
            } if(!GetUserByEmail) {
                return "user is not created"
            }
        } catch (error) {
            return error
        }
    }


    UserVerified = async (email: string, otp: number) => {
        try {

            const GetAllByEmail = await USER.getByEmail(email) as userGetEmail;
        
            
            if (GetAllByEmail?.otp) {
                const VerifiedUser=await USER.update(email);
                return VerifiedUser
            }
             if(GetAllByEmail===null){
                 return "user is not Created"
            }
        } catch (error) {
            return error
        }
    }


    DeleteUser=async(id:string)=>{
        try {
            const UserDelete=await USER.deleteSingleUser(id)
            if(UserDelete){

                return {user:UserDelete,message:"successfully deleted"}
            }
        } catch (error) {
        return error
        }
    }
}

