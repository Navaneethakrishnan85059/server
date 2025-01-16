export const oneTimePassword=()=>{
    const randomnum=Math.random() * 9000;
    const formatedRandomNum=Math.floor(randomnum)
    return formatedRandomNum
}