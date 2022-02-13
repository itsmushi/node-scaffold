const utils=require('./../utils')
const service=require('./../services/product-service')

const routes=utils.createRoute(service)

module.exports=routes