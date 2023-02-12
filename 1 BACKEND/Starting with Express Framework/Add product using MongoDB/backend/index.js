const express=require('express');
const dotenv=require('dotenv');
const app=express();
const cors=require('cors');
let router=require('./routes/transaction')

dotenv.config({path:'./config/config.env'});
require('./db/config')


app.use(cors());
app.use(express.json());
app.use(router)

const PORT=process.env.PORT || 5000 ;
app.listen(PORT,()=>{
    console.log(`app listining on ${PORT}`);
})

