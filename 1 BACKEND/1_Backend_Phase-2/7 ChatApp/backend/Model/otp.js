const mongoose=require('mongoose')


let otpSchema=new mongoose.Schema({
    code:String,
    email:String
})

module.exports=mongoose.model('otp',otpSchema)