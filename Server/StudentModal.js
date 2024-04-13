const mongoose=require("mongoose")

const StudentSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
})

const StudentModal=mongoose.model("users",StudentSchema)

module.exports=StudentModal;