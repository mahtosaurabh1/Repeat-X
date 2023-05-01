const express=require('express')
const cors=require('cors');
const bodyParser = require('body-parser');
const User = require('./Model/User');
const Expenses = require('./Model/Expenses');
const otpSchema=require('./Model/otp')
var nodemailer = require('nodemailer');

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



// ___________________forget password
app.post('/email-send',async (req,res)=>{
    let data=await User.findOne({email:req.body.email});
    if(data){
        let otpCode=Math.floor((Math.random()*10000)+1);
        let otpData =new otpSchema({
            email:req.body.email,
            code:otpCode
        })
        let result=await otpData.save();
        mailsend('2356','mahtosaurabh1@gmail.com');
        res.send(result)
    }
})

app.post('/change-password',async (req,res)=>{
    let data=await otpSchema.find({email:req.body.email,code:req.body.code});
    if(data){
        let user=await User.findOne({email:req.body.email});
        user.password=req.body.password;
        user.save();
    }

})

const  mailsend=(mail,otp)=>{
    
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mahtosaurabh1@gmail.com',
      pass: '123'
    }
  });
  
  var mailOptions = {
    from: 'mahtosaurabh1@gmail.com',
    to: 'mahtosaurabh77@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
 }



app.listen(5000,()=>{
    console.log('connetced');
})