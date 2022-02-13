/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return  knex.schema.createTable('products',(table)=>{
    table.increments()
    table.string('name').notNullable()
    table.decimal('price').notNullable()
    table.timestamps(true,true)
  })
  


};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
return  knex.schema.dropTable('products')

};
