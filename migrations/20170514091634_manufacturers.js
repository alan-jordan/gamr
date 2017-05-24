
exports.up = function(knex, Promise) {
  return knex.schema.createTable('manufacturers', function(table) {
    table.increments('id').primary()
    table.string('manufacturer_name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('manufacturers')
};
