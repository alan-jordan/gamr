
exports.up = function(knex, Promise) {
  return knex.schema.createTable('userGames', function(table) {
    table.increments('id').primary()
    table.integer('user_id')
    table.integer('game_id')
    table.integer('igdb_id')
    table.date('date_purchased')
    table.date('date_sold')
    table.integer('system_purchased_on_id')
    table.integer('ownership_status_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('userGames')
};
