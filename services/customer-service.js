const utils=require('../utils')

const customer=require('../models/customer-model')

service= utils.createService(customer)

service.special= ()=>{
   //do some stuffs on db using the model which is customer
    //    ie function can be async
    console.log("some logic running...");
    return true
}

module.exports=service