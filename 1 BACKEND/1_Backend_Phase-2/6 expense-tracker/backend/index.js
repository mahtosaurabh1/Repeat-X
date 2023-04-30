const express=require('express')
const cors=require('cors');
const bodyParser = require('body-parser');
const User = require('./Model/User');
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



app.listen(5000,()=>{
    console.log('connetced');
})