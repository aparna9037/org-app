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
router.get("/view",async(req,res)=>{
    let data=await orgModel.find()
    res.json(data)

})
router.post("/search",async(req,res)=>{
    let input=req.body
    let data=await orgModel.find(input)
    res.json(data)
})
module.exports=router