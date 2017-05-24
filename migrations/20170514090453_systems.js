
exports.up = function(knex, Promise) {
  return knex.schema.createTable('systems', function(table) {
    table.increments('id').primary()
    table.string('system_name')
    table.integer('manufacturer_id')
    table.date('system_release_date')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('systems')
};
