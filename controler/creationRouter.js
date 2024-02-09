const express=require("express")
const creationModel=require("../models/creationModel")

const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let add=new creationModel(data)
    let result=await add.save()
    res.json({
        status:"success"
    })
    res.send("success")
})

module.exports=router