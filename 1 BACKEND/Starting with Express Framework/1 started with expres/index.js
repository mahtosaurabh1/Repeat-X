let express=require('express');
let bodyParser=require('body-parser');
const app=express();

app.use(bodyParser.urlencoded({extended:false}))

// app.use('/',(req,res,next)=>{
//     console.log("this always run");
//     next();
// })

app.use('/add-product',(req,res,next)=>{
    console.log("add product");
    res.send('<form method="POST" action="/product"><input name="product" type="text" /> <input name="product" type="text" /> <button type="submit">submit</button></form>')
})

app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})

app.use('/',(req,res,next)=>{
    console.log("second middleware");
    res.send('<h1>hello</h1>')
})


app.listen(3001,(req,res)=>{
    console.log("listining")
})