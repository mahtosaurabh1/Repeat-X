let express=require('express')
let cors=require('cors')
let mysql=require('mysql2');
const { response } = require('express');

let app=express();

app.use(cors());
app.use(express.json())

let db=mysql.createPool({
    user:'root',
    host:'localhost',
    password:'#@Saurabh7',
    database:'allproducts'
})

app.get('/',(req,res)=>{
    res.send("hello");
})

app.post('/api/v1/post',(req,res)=>{
    // let sqlinsert="INSERT INTO product (title,price,description,imgurl) VALUES ('book' , '500','story','https://fcwdef')";

    let {title,price,description,imgurl}=req.body;
    let sqlinsert="INSERT INTO product (title,price,description,imgurl) VALUES (?,?,? ,?)";
    db.query(sqlinsert,[title,price,description,imgurl],(req,result)=>{
        res.send(result);
    })
})

app.get('/api/v1/product',(req,res)=>{
    let sqlGet="SELECT * FROM product";
    db.query(sqlGet,(error,resolve)=>{
        res.send(resolve)
    })
})

app.delete('/api/v1/delete/:id',(req,res)=>{
    let {id}=req.params;
    let sqlDelete="delete from product where id = ? ";
    db.query(sqlDelete,id,(error,resolve)=>{
        res.send(resolve);
    })
})

app.get('/api/v1/product/:id',(req,res)=>{
    let {id}=req.params;
    let sqlGet="SELECT * FROM product where id = ?";
    db.query(sqlGet,id,(error,resolve)=>{
        res.send(resolve)
    })
})

app.put('/api/v1/product/update/:id',(req,res)=>{
    let {id}=req.params;
    let {title,description,price,imgurl}=req.body;
    let sqlUpdate="update product set title=? , price=?,description= ? , imgurl=?";
    db.query(sqlUpdate,[title,price,description,imgurl],(err,resolve)=>{
        res.send(resolve);
    })
})


app.listen(5000,()=>{
    console.log('app is listining on 5000')
})