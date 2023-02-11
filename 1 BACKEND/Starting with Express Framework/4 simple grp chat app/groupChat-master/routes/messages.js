const express = require('express');
const router = express.Router();
const fs = require('fs');

function readMessage() {
            try {
                const data = fs.readFileSync('D:\\1 Repeat-x\\1 BACKEND\\Starting with Express Framework\\4 simple grp chat app\\groupChat-master\\data\\chats.txt', 'utf8');
              
                return data;
              } catch (err) {
                console.log("error is",err)
            }
}
    
let messageStr  = readMessage();
console.log(messageStr);


router.get('/', (req, res, next) => {
    if(readMessage().length == 0) {
        res.send(`<h1>No new messages</h1>
        <form action='/' onSubmit = "document.getElementById('username').value = localStorage.getItem('username')" 
        method="POST">
        <input type="text" name="message">
        <input type="hidden" name="username" id="username">
        <button type="submit">Send Message</button>
        </form>`)
    }
    else{
        res.send(`<h1>${readMessage()}</h1>
        <form action='/' onSubmit = "document.getElementById('username').value = localStorage.getItem('username')" 
        method="POST">
        <input type="text" name="message">
        <input type="hidden" name="username" id="username">
        <button type="submit">Send Message</button>
        </form>`)
    }
    })

router.post('/', (req, res, next) => {
     fs.appendFile('D:\\1 Repeat-x\\1 BACKEND\\Starting with Express Framework\\4 simple grp chat app\\groupChat-master\\data\\chats.txt', `${req.body.username} ${req.body.message} `, (err) => {
        console.log(err)
     });
    res.redirect('/');
})



module.exports = router;