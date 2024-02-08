const mongoose=require("mongoose")
const gymschema=new mongoose.Schema(
    {
        name:String,
        address:String,
        Age:String,
        date:String,
        weight:String
        
    }
)

module.exports=mongoose.model("gym",gymschema)