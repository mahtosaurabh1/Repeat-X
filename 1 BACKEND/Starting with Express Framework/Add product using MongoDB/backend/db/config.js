let mongoose=require('mongoose')

mongoose.connect('mongodb+srv://saurabh:Saurabh7@cluster0.zku7o9h.mongodb.net/dummyproducts?retryWrites=true&w=majority').then(()=>{
    console.log('connected to database');
}).catch(()=>{
    console.log("error in db")
})