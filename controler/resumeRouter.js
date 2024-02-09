const express=require("express")
const resumemodel=require("../models/resumeModel")

const router=express.Router()
const bcrypt=require("bcryptjs")


hashPasswordGenerator=async(password)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(password,salt)
}


router.post("/signup",async(req,res)=>{
    let {data}={"data":req.body}
    let pass=data.pass
    hashPasswordGenerator(pass).then(
        (hashedPassword)=>{
            console.log(hashedPassword)
            data.pass=hashedPassword
            console.log(data)
    
            let details=new resumemodel(data)
            let result= details.save()
            res.json({
                status:"success"
            })
        }
    )

})



router.post("/signin",async(req,res)=>{
    let input=req.body
    let email=req.body.email
    let data=await resumemodel.findOne({"email":email})
    if (!data) {
        return res.json(
            {
                status:"invalid user"
            }
        )
    }
    console.log(data)
    let dbPass=data.pass
    let inputPass=req.body.pass
    const match=await bcrypt.compare(inputPass,dbPass)
    if (!match) {
        return res.json({
            status:"incorrect password"
        })
    }
    res.json({
        status:"success"
    })
})


module.exports=router