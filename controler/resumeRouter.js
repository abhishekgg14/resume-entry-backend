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




module.exports=router