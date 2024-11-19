import bcrypt from "bcrypt"
export class passwordSecurity {

    encryption =async(plainText:string)=>{

const saltRound=10;
const encrypt=await bcrypt.hash(plainText,saltRound);
console.log('encrypt :>> ', encrypt);
return encrypt;
    }

    decryption=async(haspassword:string,plainText:string)=>{
const decrypt=await bcrypt.compare(haspassword,plainText);
console.log('decrypt :>> ', decrypt);
return decrypt;
    }
}