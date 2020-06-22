
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { 
        username: 'Dra', 
        password: 'secret', 
        phoneNumber: '123123123'
      },

        {
        username: 'Goblin', 
        password: 'password', 
        phoneNumber: '222222222'
      },

        {
        username: 'Wolf', 
        password: 'bark', 
        phoneNumber: '321321321'
      }
      ]);
    });
};
