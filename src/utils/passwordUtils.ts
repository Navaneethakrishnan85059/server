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
async decryption(password:string,plaintext:string){
    try {
        
    
        const decrypt=await bcrypt.compare(password,plaintext)
        console.log("decryot",decrypt);
        
        return decrypt
    } catch (error) {
        console.error(error);
        
    }
    },
}