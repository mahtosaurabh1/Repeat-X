const mongoose=require('mongoose')


let expensesSchema=new mongoose.Schema({
    money:Number,
    description:String,
    category:String
})

module.exports=mongoose.model('expenses',expensesSchema)