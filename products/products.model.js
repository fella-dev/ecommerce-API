const mongoose=require('mongoose')

const ProductSchema=new mongoose.Schema({
image:String,
nom:String,
categories:{
    type:[String],
    
},
Description:String,
Prix:Number,
disponibilité:{
    type:Boolean,
    default:false
}

})

const ProductModel=mongoose.model("Product",ProductSchema)

module.exports=ProductModel