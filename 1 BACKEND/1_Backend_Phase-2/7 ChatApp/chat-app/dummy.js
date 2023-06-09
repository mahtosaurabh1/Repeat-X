let msg=['abc','d','e','f','g'];
let mes=''
for(let i=0;i<msg.length;i++){
    mes=mes+' '+msg[i]

}
const m1=msg.join()
console.log(mes)

// app.post('/',(req,res,next)=>{
//     console.log(req.body.username)
//     console.log(req.body.message)
//     fs.writeFile('message.txt',`${req.body.username}+${req.body.message}`,{flag :'a'},err=>{
        
//         res.redirect('/')
//     })
// })