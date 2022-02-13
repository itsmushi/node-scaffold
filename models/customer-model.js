const { Model }=require('objection')

class Customer extends Model{
    static tableName='customers'

}

module.exports=Customer