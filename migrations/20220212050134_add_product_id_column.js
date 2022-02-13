/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.alterTable('customers',(table)=>{
      table.integer('product_id').unsigned()
      table.foreign('product_id').references('id').inTable('products').onDelete('SET NULL').onUpdate('CASCADE')
  })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    knex.schema.table('customers',(table)=>{
        table.dropColumn('product_id')
    })
};
