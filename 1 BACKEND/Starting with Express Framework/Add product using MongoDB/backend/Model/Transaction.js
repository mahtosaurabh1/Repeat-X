const mongoose=require('mongoose');

let transactionSchema=new mongoose.Schema({
    text:{
        type:String,
        required:[true,'please add some text']
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('products',transactionSchema);