const mongoose=require('mongoose')


let AllChatSchema=new mongoose.Schema({
    email:String,
    message:String
})

module.exports=mongoose.model('user',AllChatSchema)