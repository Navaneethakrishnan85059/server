import express from "express"

const app=express()

const port:number=6000

app.listen(()=>{
    console.log('port :>> ', port);
})