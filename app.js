const express=require("express")
const cors=require("cors")
const  mongoose=require("mongoose")
const addOrgRoute=require("./controllers/addOrgRoute")
const app=express()

app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://aparna:aparna2468@cluster0.gxutpre.mongodb.net/orglDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true})
    app.use("/api/org",addOrgRoute)
    
app.listen(3001,()=>{
    console.log("server running")
})