const mongoose=require("mongoose")
const orgSchema=new mongoose.Schema(
    {
        id:String,
        name:String,
        address:String,
        phone:String
    }
    )

    module.exports=mongoose.model("org",orgSchema)