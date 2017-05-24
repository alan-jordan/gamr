
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('manufacturers').del()
    .then(function () {
      // Inserts seed entries
      return knex('manufacturers').insert([
        {id: 1, manufacturer_name: 'Nintendo'},
        {id: 2, manufacturer_name: 'Sega'}
      ]);
    });
};
