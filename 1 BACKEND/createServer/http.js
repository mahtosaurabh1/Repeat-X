let http=require('http');

const server=http.createServer((req,res)=>{
    console.log(req)
    console.log('Saurabh Kumar');
})

server.listen(3001)