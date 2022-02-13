const express=require('express')
const customerController=require('./customers')
const productController=require('./products')
const router=express.Router()


router.use('/customer',customerController)
router.use('/product',productController)



module.exports=router




