
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ownership_status').del()
    .then(function () {
      // Inserts seed entries
      return knex('ownership_status').insert([
        {id: 1, ownership_status: 'Owned'},
        {id: 2, ownership_status: 'Sold'},
        {id: 3, ownership_status: 'Want to buy'}
      ]);
    });
};
