const express=require('express')
const ejs=require('ejs')
const paypal=require('paypal-rest-sdk')

const app=express()

app.set('view engine', 'ejs')

app.set('/', (req,res)=>res.render('index'))

app.listen(8080,()=>console,log("server setup on 8080"))