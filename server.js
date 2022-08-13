const express=require('express')
const mongoose=require('mongoose')
const db=require("./database")


require('dotenv').config()
const app=express()
app.use(express.json())
const port=process.env.PORT || 6000
db.connect()

const ProductRouter=require("./products/products.routes")
app.use('/products',ProductRouter)
app.all("*",(req,res)=>{
    res.status(404)
    res.send({message:"Path not found"})
})

app.listen(port,()=>{
    console.log(`Port running on port ${port}`)
})

