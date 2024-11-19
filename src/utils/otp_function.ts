export const generateOtp=()=>{
const randomNum=Math.random()*5000
return Math.floor(1000+randomNum).toString()
}


