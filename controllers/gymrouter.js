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

module.exports=router