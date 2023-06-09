const path=require('path')

const express = require('express')
const bodyParser=require('body-parser')

const adminRouter=require('./routes/admin')
const shopRouter=require('./routes/shop')
const contactusRouter=require('./routes/contact-us')
const successRouter=require('./routes/success')

const errorController=require('./controller/error')

const app=express()

app.use(express.static(path.join(__dirname,'public')))

app.use(bodyParser.urlencoded({extended: false}))

app.use('/admin',adminRouter)
app.use('/shop',shopRouter)
app.use(contactusRouter)
app.use(successRouter)

app.use(errorController.pageNotFound)

app.listen(3000)