
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('game_series').del()
    .then(function () {
      // Inserts seed entries
      return knex('game_series').insert([
        {id: 1, game_seres_name: 'The Legend of Zelda'},
        {id: 2, game_seres_name: 'Super Mario'},
        {id: 3, game_seres_name: 'Sonic the Hedgehog'}
      ]);
    });
};
