let mongoose=require('mongoose')


let expenseSchema=new mongoose.Schema({
    money:Number,
    description:String,
    category:String

})

module.exports=mongoose.model('expenses',expenseSchema);