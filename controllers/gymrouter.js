const express=require("express")
const gymmodel = require("../model/gymmodel")

const router=express.Router()

router.post('/add',async(req,res)=>{
    let data=req.body
    let gym=new gymmodel(data)
    let result=await gym.save()
        res.json({status:"success"})
})

router.get('/view',async(req,res)=>{
    let data=await gymmodel.find()
    res.json(data)
})

router.post('/search',async(req,res)=>{
    let input=req.body
    let data=await gymmodel.find(input)
    res.json(data)
})

router.post('/delete',async(req,res)=>{
    let input=req.body
    let response=await gymmodel.deleteOne(input)
    res.json({"status":"success"})
})
module.exports=router