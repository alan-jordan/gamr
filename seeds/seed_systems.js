
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('systems').del()
    .then(function () {
      // Inserts seed entries
      return knex('systems').insert([
        {
          id: 1,
          system_name: 'Nintendo Switch',
          manufacturer_id: 1,
          system_release_date: '2017-03-03'
        },
        {
          id: 2,
          system_name: 'Nintendo Entertainment System',
          manufacturer_id: 1,
          system_release_date: '1983-07-15'
        },
        {
          id: 3,
          system_name: 'Sega Megadrive',
          manufacturer_id: 2,
          system_release_date: '1988-10-29'
        }
      ]);
    });
};
