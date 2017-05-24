
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {
          id: 88801,
          game_name: 'The Legend of Zelda: Breath of the Wild',
          game_publisher_id: 2,
          game_release_date: "2017-03-03",
          game_series_id: 1,
          game_box_art: '/images/botw.jpg'
        },
        {
          id: 88802,
          game_name: 'Super Marios Bros',
          game_publisher_id: 2,
          game_release_date: "1982-04-22",
          game_series_id: 2,
          game_box_art: '/images/mariobros.jpg'
        },
        {
          id: 88803,
          game_name: 'Sonic the Hedgehog',
          game_publisher_id: 1,
          game_release_date: "1991-06-23",
          game_series_id: 3,
          game_box_art: '/images/sonic.jpg'
        }
      ]);
    });
};
