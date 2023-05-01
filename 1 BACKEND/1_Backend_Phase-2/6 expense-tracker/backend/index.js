const express=require('express')
const cors=require('cors');
const bodyParser = require('body-parser');
const User = require('./Model/User');
const Expenses = require('./Model/Expenses');
require('./db/config')


const app=express();
app.use(cors())
app.use(bodyParser());

// _______________________________________________
// authentication


app.post('/register',async (req,res)=>{
    let user=await User(req.body)
    let result=await user.save();
    res.send(result);
    
})

app.post('/login',async(req,res)=>{
    if(req.body.email && req.body.password){
        let user=await User.findOne(req.body).select('-password')
        if(user){
            res.send(user)
        }else{
            res.send({result:'user not found'})
        }
       }else{
        res.send({result:'user not found'})
    }
})


// ____________________________________
app.post('/expenses',async (req,res)=>{
    let expense=await Expenses(req.body);
    let  result=await expense.save();
    res.send(result)

})

app.get('/expenses',async (req,res)=>{
    let result=await Expenses.find();
    res.send(result)
})

app.delete('/expenses/:id',async (req,res)=>{
    let result=await Expenses.deleteOne({_id:req.params.id})
    res.send(result)
})

app.put('/expenses/:id',async (req,res)=>{
    let result=await Expenses.updateOne({_id:req.params.id},{$set:req.body})
    res.send(result)
})



app.listen(5000,()=>{
    console.log('connetced');
})