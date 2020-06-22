
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('plants').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('plants').insert([
        {user_id: 1,
           nickname:'Allen', 
           species: 'Allium genus', 
           h2oFrequency: '5 times a week', 
           image: 'https://images.unsplash.com/photo-1558350315-8aa00e8e4590?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80'},

        {user_id: 1,
          nickname:'Tasty', 
          species: 'Solanum lycopersicum', 
          h2oFrequency: '3 times a week', 
          image: 'https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'},

        {user_id: 1,
          nickname:'Golden Poppy', 
          species: 'Eschscholzia californica', 
          h2oFrequency: '2 times a week', 
          image: 'https://images.unsplash.com/photo-1504033017863-0d90ed4d81c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'}
      ]);
    });
};
