
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('userSystems').del()
    .then(function () {
      // Inserts seed entries
      return knex('userSystems').insert([
        {
          id: 1,
          user_id: 99901,
          system_id: 1,
          date_purchased: "2017-03-05",
          ownership_status_id: 1
        },
        {
          id: 2,
          user_id: 99901,
          system_id: 2,
          date_purchased: "2017-03-05",
          ownership_status_id: 1
        },
        {
          id: 3,
          user_id: 99901,
          system_id: 3,
          date_purchased: "2017-03-05",
          ownership_status_id: 1
        },
        {
          id: 4,
          user_id: 99902,
          system_id: 1,
          date_purchased: "2017-03-05",
          ownership_status_id: 1
        },
        {
          id: 5,
          user_id: 99903,
          system_id: 3,
          date_purchased: "2017-03-05",
          ownership_status_id: 1
        },
      ]);
    });
};



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
