const express=require("express")
const orgModel=require("../model/orgModel")

const router=express.Router()


router.post("/add",async(req,res)=>{
    let data=req.body
    let org=new orgModel(data)
    let result=await org.save()
    res.json({
        status:"success"
    })
})
module.exports=router