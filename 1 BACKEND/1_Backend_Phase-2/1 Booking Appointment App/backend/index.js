const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
require('./db/config')
const BookingDetailSchema=require('./Model/Booking_detail')




const app=express();

app.use(bodyParser());
app.use(cors())


app.get('/api/get',async (req,res)=>{
    let result=await BookingDetailSchema.find();
    if(result.length>0){
        res.send(result);
    }else{
        res.send({'result':'product is empty'})
    }
})

app.post('/api/post',async (req,res)=>{
    let detail=await BookingDetailSchema(req.body);
    let result=await detail.save();
    res.send(result); 
})

app.delete('/api/:id',async (req,res)=>{
    const result=await BookingDetailSchema.deleteOne({_id:req.params.id})
    res.send(result)
})




app.listen(5000,()=>{
    console.log('connected');
})