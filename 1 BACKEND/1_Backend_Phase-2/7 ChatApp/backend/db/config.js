let mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/chat-app').then(() => {
    console.log("connected to database");
})

// mongoose.connect(`mongodb+srv://saurabh:Saurabh7@cluster0.pbf2e5b.mongodb.net/expenses?retryWrites=true&w=majority`).then(() => {
//     console.log("connected to database");
// })