let http = require("http");
let fs =require('fs');

const app = http.createServer(function(req,res){
    let url=req.url;
    let method=req.method;
    // if(url === '/home'){
    //     res.write("welcome to home")
    // }else if(url==='/about'){
    //     res.write('welcome to about us page')
    // }else if(url === '/node'){
    //     res.write('welcome to our nodejs project')
    // }

   if(url === '/'){
    res.write('<html><head></head><body> <form method="POST" action="/message"> <input name="message type="text"> <button>submit</button type="submit"> </form></body></html>');

    let d=fs.readFileSync('./message.txt');
     res.write(d);
    return res.end();
   }

   if(url === '/message'  && method === "POST"){
    const body=[];
    req.on('data',(chunk)=>{
        // console.log("chunk",chunk)
        body.push(chunk);
    })
    req.on('end',()=>{
        let parsedBody=Buffer.concat(body).toString();
        let message=parsedBody.split('=')[1];
        fs.writeFileSync('message.txt',message);
        console.log("message ",message);
    })

    

    res.statusCode=302;
    res.setHeader('Location','/');
    return  res.end();
   }
    
    res.end();
})

app.listen(5000);
