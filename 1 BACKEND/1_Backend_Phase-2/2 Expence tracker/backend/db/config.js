const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/expense-tracker').then(() => {
    console.log("connected to database");
})