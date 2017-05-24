exports.up = function(knex, Promise) {
  return knex.schema.createTable('userSystems', function(table) {
    table.increments('id').primary()
    table.integer('user_id')
    table.integer('system_id')
    table.date('date_purchased')
    table.date('date_sold')
    table.integer('ownership_status_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('userSystems')
};
