let express=require('express')
let cors=require('cors')
const bodyParser = require('body-parser');
const expenseSchema = require('./Model/expenseSchema');
require('./db/config')


let app=express();
app.use(bodyParser());
app.use(cors());

app.get('/api/get',async (req,res)=>{
    let result=await expenseSchema.find()
    res.send(result)
})

app.post('/api/post',async (req,res)=>{
    let result=await expenseSchema(req.body)
    result=await result.save();
    res.send(result)
})

app.delete('/api/:id',async (req,res)=>{
    let result=await expenseSchema.deleteOne({_id:req.params.id});
    res.send(result)
})

app.put('/api/update/:id',async (req,res)=>{
    let result= await expenseSchema.updateOne(
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

