
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 99901,
          user_username: 'eljordy',
          user_first_name: 'Alan',
          user_surname: "Jordan",
          user_dob: "1982-04-22"
        },
        {
          id: 99902,
          user_username: 'bountyHunter#1',
          user_first_name: 'Boba',
          user_surname: "Fett",
          user_dob: "1982-04-15"
        },
        {
          id: 99903,
          user_username: "Nerf Herder",
          user_first_name: 'Han',
          user_surname: "Solo",
          user_dob: "1981-12-08"
        }
      ]);
    });
};
