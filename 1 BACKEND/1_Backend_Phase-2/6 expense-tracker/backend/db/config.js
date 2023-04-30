let mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/expence-tracker-app').then(() => {
    console.log("connected to database");
})