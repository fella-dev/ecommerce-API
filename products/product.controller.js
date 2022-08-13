const ProductModel = require("./products.model");


function createProduct(prdInfo){
    const newPrd= new ProductModel (prdInfo)
    return newPrd.save()

}

function getAllProducts({limit,sort}){
   const query= ProductModel.find()
   if(sort){
    query.sort({ [sort]: 1 })
   }
   if(limit){
    query.limit(limit)
   }
   return query
}
function getProductById(prdId){
 return  ProductModel.findById(prdId)

}
function modifyprd(prdId,newPrd){
    return ProductModel.findByIdAndUpdate(prdId, newPrd,{new:true})
}
function deleteProduct(prdId){
    return ProductModel.findByIdAndDelete(prdId)
}
module.exports={createProduct,getAllProducts,getProductById,modifyprd,deleteProduct}