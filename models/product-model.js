const { Model }=require('objection')
const CustomerModel=require('./customer-model')


//we assume customer has only one product
//one product can belong to none or more than one customer
class Product extends Model{
    static tableName="products"

    static relationMappings={
        owner:{
            relation:Model.HasManyRelation,
            modelClass:CustomerModel
        },
        join:{
            from:'products.id',
            to:'customer.product_id'
        }
    }
}   

module.exports=Product