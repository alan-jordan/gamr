exports.up = function(knex, Promise) {
  return knex.schema.createTable('ownership_status', function(table) {
    table.increments('id').primary()
    table.string('ownership_status')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ownership_status')
};
