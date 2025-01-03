import  type { Request,Response,NextFunction} from "express"
const errorHandler=(err:Error,req:Request,res:Response,next:NextFunction)=>{

    console.error("error Stack:",err.stack);
    
    if(res.headersSent){
        return next(err)

    }
    res.status(500).json({
        sucess:false,
        message:err.message||"Internal Server error",
        name:err.name||"Unknown error",
        
    })

}

export default errorHandler