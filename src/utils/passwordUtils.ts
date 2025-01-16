import bcrypt from "bcrypt"

export const passWordEncDec={
async encryption(password:string){
try {
    const plaintext=password;
    const saltRound=10;

    const encrypt=await bcrypt.hash(plaintext,saltRound);
    return encrypt
} catch (error) {
    console.error(error);
   
}
},
async decryption(password:string){
    try {
        const plaintext=password;
        const saltRound=10;
    
        const encrypt=await bcrypt.hash(plaintext,saltRound);
        return encrypt
    } catch (error) {
        console.error(error);
        
    }
    },
}