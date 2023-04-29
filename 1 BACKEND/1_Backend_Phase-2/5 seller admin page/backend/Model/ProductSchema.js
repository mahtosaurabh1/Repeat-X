let mongoose=require('mongoose')


let ProductSchema=new mongoose.Schema({
    money:Number,
    productName:String,
    category:String

})

module.exports=mongoose.model('products',ProductSchema);