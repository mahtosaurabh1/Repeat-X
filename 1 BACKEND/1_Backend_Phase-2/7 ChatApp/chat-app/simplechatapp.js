const express=require('express')
const fs=require('fs')

const bodyParser=require('body-parser')

const app=express()

app.use(bodyParser.urlencoded({extended: false}))


app.get('/',(req,res,next)=>{
    fs.readFile('chat.txt',(err,data)=>{
     if(err){
       console.log(err)
       data='No chat exists'
     }
     res.send(`${data}<form action="/" method="POST" onSubmit="document.getElementById('username').value=localStorage.getItem('username')">
             <input type="text" name="message">
             <input type="hidden" name="username" id="username" placeholder="enter a username">
             <button type="Submit">chat</button></form>`)
    })
})

app.post('/',(req,res)=>{
    console.log(req.body.username)
    console.log(req.body.message)
    fs.writeFile('chat.txt',`${req.body.username} : ${req.body.message}`,{flag:'a'},(err)=>{
        if(err) err ? console.log(err):null

        res.redirect('/')
    })
})


app.get('/login',(req,res)=>{
    res.send(`<form method="POST" action="/login" onSubmit="localStorage.setItem("username",document.getElementById("username").value)">
        <input type="text" id="username" placeholder="username" name="username">
        <button type="submit">addUSER</button>
        </form>`)
})

app.post('/login',(req,res,next)=>{
    res.redirect('/')
})



app.listen(3000)


