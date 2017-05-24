
exports.up = function(knex, Promise) {
  return knex.schema.createTable('publishers', function(table) {
    table.increments('id').primary()
    table.string('publisher_name')
    table.integer('publisher_year_established')
    table.string('publisher_headquarters_location')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('publishers')
};
