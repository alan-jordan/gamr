
exports.up = function(knex, Promise) {
  return knex.schema.createTable('game_series', function(table) {
    table.increments('id').primary()
    table.string('game_seres_name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('game_series')
};
