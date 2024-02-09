const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const resumeRoute=require("./controler/resumeRouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://abhishekgg14:Gireesh5655@cluster0.aeekxv7.mongodb.net/resumeDb?retryWrites=true&w=majority",
{useNewUrlParser:true})

app.use("/api",resumeRoute)

app.listen(3002,()=>{
    console.log("Running")
})