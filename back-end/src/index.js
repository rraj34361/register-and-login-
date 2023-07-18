const express = require('express')
const app = express()
const {default : mongoose} = require('mongoose')
const port = 3000
const cors = require('cors')
const cookieParser = require('cookie-parser')

const route = require('./route/route.js')
app.use(cookieParser())
app.use(express.json())
app.use(cors())

//when we are dealing with form data we use urlencoded

app.use(express.urlencoded({extended:true}))
 

mongoose.connect('mongodb+srv://rraj34361:bXgwmkpBz9CHdAfr@cluster0.brjrlou.mongodb.net/register', {useNewUrlParser : true }).then(()=>{
    console.log("mongodb connected...")

}).catch((err)=>{
    console.log(err)
})

app.use('/', route)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))