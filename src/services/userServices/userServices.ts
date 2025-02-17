import generateUniqueId from "generate-unique-id";
import { oneTimePassword } from "../../utils/oneTimePassword";
import { USER } from "../../repositories/user_Repositories/Users";
import { MailSender } from "../../utils/nodemail";
import { passWordEncDec } from "../../utils/passwordUtils";
import type { LoginUserGetEmail, userGetEmail } from "../../types/user";
import jwt from "jsonwebtoken";

export class userServices {
  AddUserDetails = async (
    username: string,
    email: string,
    password: string,
    phone: string
  ) => {
    try {
      const verifiedEmail = await USER.getByEmail(email);

      if (verifiedEmail) {
        return {message:"email Already Exist",status:400};
      }
      if (!verifiedEmail) {
        const ids = generateUniqueId({
          length: 10,
          useLetters: false,
          useNumbers: true,
        });
        const otp = await oneTimePassword();
        const MailMessage = await MailSender(email, otp);
        const haspassword = await passWordEncDec.encryption(password);
        const userData = {
          id: ids,
          username: username,
          email: email,
          password: haspassword || "",
          phone: phone,
          otp: otp,
        };
        console.log(userData);

        const PostUserDetails = await USER.add(userData);
        return {details:PostUserDetails,status:200};
      }
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  CheckUserByEmailPassword = async (email: string, password: string) => {
    try {
      const GetUserByEmail = (await USER.getByEmail(email)) as userGetEmail;

      if (GetUserByEmail) {
        const decryption = await passWordEncDec.decryption(
          password,
          GetUserByEmail.password
        );
        if (decryption === true) {
          if (GetUserByEmail.verified === true) {
            const EditUser: LoginUserGetEmail = {
              id: GetUserByEmail.id,
              email: GetUserByEmail.email,
              username: GetUserByEmail.username,
              verified: GetUserByEmail.verified,
              phone: GetUserByEmail.phone,
            };

            const Token = jwt.sign({ data: EditUser }, "1234", {
              algorithm: "HS512",
            });
            return { Token, status: 200 };
          } else {
            return { message: "account is not verified", status: 400 };
          }
        } else {
          return { message: "password is not correct", status: 400 };
        }
      } else {
        return { message: "user is not created", status: 400 };
      }
    } catch (error) {
      return error;
    }
  };

  GetUserByEmail = async (email: string) => {
    try {
      const GetUserByEmail = await USER.getByEmail(email);
      if (GetUserByEmail) {
        return{ details:GetUserByEmail,status:200};
      }
      if (!GetUserByEmail) {
        return{ message:"user is not created",status:400};
      }
    } catch (error) {
      return error;
    }
  };

  UserVerified = async (email: string, otp: number) => {
    try {
      const GetAllByEmail = (await USER.getByEmail(email)) as userGetEmail;

      if (GetAllByEmail === null) {
        return {message:"user is not Created",status:400};
      }
      if (GetAllByEmail?.otp === otp) {
        const VerifiedUser = (await USER.update(email)) as userGetEmail;
        if(VerifiedUser){
          const sendVerifiedUserData:LoginUserGetEmail={
id:VerifiedUser.id,
username:VerifiedUser.username,
email:VerifiedUser.email,
phone:VerifiedUser.phone,
verified:VerifiedUser.verified
}

const Token=jwt.sign({data:sendVerifiedUserData},"1234",{algorithm:"HS512"});
return {Token,message:"verified Successfully",status:200}
        }
      } else {
        return {message:"please Enter valid otp",status:400};
      }
    } catch (error) {
      return error;
    }
  };

  DeleteUser = async (id: string) => {
    try {
      const UserDelete = await USER.deleteSingleUser(id);
      if (UserDelete) {
        return { user: UserDelete, message: "successfully deleted",status:200};
      }
    } catch (error) {
      return error;
    }
  };

  PasswordUpdation = async (email: string, password: string) => {
    try {
      const GetAllByEmail = (await USER.getByEmail(email)) as userGetEmail;
      console.log(GetAllByEmail);
      if (GetAllByEmail) {
        const haspassword = await passWordEncDec.encryption(password);
        const passwordUpdate = await USER.UserPasswordUpdate(
          email,
          haspassword
        );
        return {
          passwordUpdate,
          message: "password change successfully",
          status: 200,
        };
      } else {
        return { message: "user is not created", status: 400 };
      }
    } catch (error) {
      return error;
    }
  };
}
