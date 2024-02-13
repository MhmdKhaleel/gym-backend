const mongoose=require("mongoose")
const gymschema=new mongoose.Schema(
    {
        name:String,
        address:String,
        age:String,
        date:String,
        weight:String
        
    }
)

module.exports=mongoose.model("gym",gymschema)