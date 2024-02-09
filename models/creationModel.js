const mongoose=require("mongoose")

const creationSchema=new mongoose.Schema(
    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"user"
        },
        qualification:{
            type:String,
            required:true
        },
        skills:{
            type:String,
            required:true
        },
        experience:{
            type:String,
            required:true
        },
        certification:{
            type:String,
            required:true
        }
    }
)

module.exports=mongoose.model("resume",creationSchema)