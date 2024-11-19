import multer from "multer";
import path from "node:path";
import fs from "node:fs"
const uploaddir=path.join(__dirname,'../uploads')
if(!fs.existsSync(uploaddir)){
fs.mkdirSync(uploaddir,{recursive:true});
}


const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
cb(null,'../uploads')
    },

    filename:(req,file,cb)=>{
const unifix=`${Date.now()}-${Math.round(Math.random()*1E9)}`
cb(null,`${file.fieldname}-${unifix}${path.extname(file.filename)}`)
    }
})


const uploads=multer({storage:storage,
    fileFilter:(req,file,cb)=>{

    const allowedmimeType=['media/png','media/jpg','media/mp3','media/mp4','media/jpeg']

    if(!allowedmimeType.includes(file.mimetype)){
        return cb(new Error("only media files allowed"))
    }
    cb(null,true)
    }



})


export default uploads