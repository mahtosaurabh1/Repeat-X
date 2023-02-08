let http = require("http");

const app = http.createServer(function(req,res){
    // res.write("Hello world");
    let url=req.url;
    if(url === '/home'){
        res.write("welcome to home")
    }else if(url==='/about'){
        res.write('welcome to about us page')
    }else if(url === '/node'){
        res.write('welcome to our nodejs project')
    }
    res.end();
})

app.listen(5000);
