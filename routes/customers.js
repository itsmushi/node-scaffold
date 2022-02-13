const utils=require('../utils')
const serviceClass=require('../services/customer-service')

const routes=utils.createRoute(serviceClass)


const specialRoute=(request,response)=>{
    serviceClass.special() //execute some functions related in this route whose logic is in the service
    response.sendStatus(200);
}

routes.get('/special/:id',specialRoute)

module.exports=routes



