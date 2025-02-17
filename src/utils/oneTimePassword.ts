export const oneTimePassword=()=>{
    const randomnum=Math.random() * 9000;
    const formatedRandomNum=Math.floor(1000+randomnum)
    return formatedRandomNum
}