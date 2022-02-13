const productModel=require('./../models/product-model')
const utils=require('./../utils')


service=utils.createService(productModel)

module.exports=service



