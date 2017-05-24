
exports.up = function(knex, Promise) {
  return knex.schema.createTable('games', function(table) {
    table.increments('id').primary()
    table.string('game_name')
    table.integer('game_publisher_id')
    table.date('game_release_date')
    table.string('game_box_art')
    table.integer('game_series_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('games')
};
