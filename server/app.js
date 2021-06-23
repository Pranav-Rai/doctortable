const cookieParser = require('cookie-parser')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const app = express()

require('./db/conn')
const PORT = process.env.PORT

app.use(cookieParser())
app.use(express.json())
app.use(require('./router/auth'))



// app.get('/', (req,res)=>{
//     res.send(`hello there`)
// })
app.get('/about', (req,res)=>{
    res.send(`hello there about`)
})
app.get('/contact', (req,res)=>{
    res.send(`hello there contact `)
})
app.get('/signin', (req,res)=>{
    res.send(`hello there signin`)
})
app.get('/signup', (req,res)=>{
    res.send('hello there signup')
})


app.listen(PORT , ()=>{
    console.log('server started')
})