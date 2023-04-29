let express=require('express')
let cors=require('cors')
const bodyParser = require('body-parser');
const ProductSchema = require('./Model/ProductSchema');
require('./db/config')


let app=express();
app.use(bodyParser());
app.use(cors());

app.get('/api/get',async (req,res)=>{
    let result=await ProductSchema.find()
    res.send(result)
})

app.post('/api/post',async (req,res)=>{
    let result=await ProductSchema(req.body)
    result=await result.save();
    res.send(result)
})

app.delete('/api/:id',async (req,res)=>{
    let result=await ProductSchema.deleteOne({_id:req.params.id});
    res.send(result)
})

app.put('/api/update/:id',async (req,res)=>{
    let result= await ProductSchema.updateOne(
        {_id:req.params.id},
        {
          $set:req.body
        }
    )
    res.send(result)
})

app.listen(5000,()=>{
    console.log('connected');
})

