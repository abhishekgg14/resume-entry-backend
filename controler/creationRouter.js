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

router.get("/view",async(req,res)=>{
    let result=await creationModel.find()
    .populate("userId","name email qualification skills experience certification pass -_id")
    .exec()
    res.json(result)
})

module.exports=router