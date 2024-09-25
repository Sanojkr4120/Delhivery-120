const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 8080

//schema
const schemaData = mongoose.Schema({
    name: String,
    email: String,
    moveFrom: String,
    moveTo: String,
    number: String
},{
    timestamps : true
})

const userModel = mongoose.model("user", schemaData)
//read
app.get("/", async(req,res)=>{
    const data = await userModel.find({})

    res.json({Success: true, data : data})
})
//create data ||save data in mongodb
app.post("/create",async(req,res)=>{
    console.log(req.body)
    const data = new userModel(req.body)
    await data.save()


    res.send({success: true, message: "data save successfully"})
})





mongoose.connect("mongodb://127.0.0.1:27017/client")
.then(()=>console.log('connected to DB'))
.catch((err)=>console.log(err))



app.listen(PORT,()=>console.log("Server is running"))