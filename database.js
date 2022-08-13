const mongoose=require('mongoose')

//Database_URL="mongodb://localhost:27017/ecommerce"

function connect(){
    mongoose.connect(process.env.Database_URL,()=>{
        console.log("db connectes")
    })
}
module.exports={connect}