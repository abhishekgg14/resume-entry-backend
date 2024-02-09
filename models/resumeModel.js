const mongoose=require("mongoose")

const resumeSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        pass:{
            type:String,
            required:true
        }
    }
)

module.exports=mongoose.model("user",resumeSchema)