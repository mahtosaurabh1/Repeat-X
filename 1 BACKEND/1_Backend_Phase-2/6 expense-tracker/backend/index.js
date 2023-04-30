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
    res.send(result)
})



app.listen(5000,()=>{
    console.log('connetced');
})