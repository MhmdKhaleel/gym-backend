const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const gymrouter = require("./controllers/gymrouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://khaleel3936:khaleel3936@cluster0.qh3996x.mongodb.net/gymDb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)

app.use('/api/gym',gymrouter)

app.listen(1001,()=>{
    console.log("Server Running")
})
