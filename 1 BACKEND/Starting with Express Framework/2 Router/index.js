let express=require('express');
let bodyParser=require('body-parser');
const app=express();
let adminRoutes=require('./routes/admin')
let shopRoutes=require('./routes/shop')

app.use(bodyParser.urlencoded({extended:false}))

app.use(shopRoutes);
app.use(adminRoutes);

app.use((req,res)=>{
    res.status(404).send('<h1>Page not fount</h1>')
})

app.listen(3001,(req,res)=>{
    console.log("listining")
})