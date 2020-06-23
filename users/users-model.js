const db = require('../database/dbConfig.js');


module.exports = {
    add,
    find,
    findBy,
    findPlantsById,
    findById,
    remove,
    update
};

// find the users by id, username, and phoneNumber
function find() {
    return db('users').select('id', 'username', 'phoneNumber');
}

// find plants by id
function findPlantsById(id) {
    return db('plants')
    .select(
      'plants.id AS plant_id',
      'plants.nickname',
      'plants.species',
      'plants.h2oFrequency',
      'plants.image',
      'users.username AS user'
    )
    .where({ 'plants.user_id': id})
    .join('users', 'users.id', 'plants.user_id');
}

// finds existing user by username and password
function findBy(filter) {
  return db('users')
  .where(filter);
}

// adds new user
async function add(user) {
    const [id] = await db('users')
    .insert(user);
    return findById(id);
}

function findById(id) {
    return db('users')
    .select('id', 'username', 'phoneNumber')
    .where({ id })
    .first();
}

// removes a user
function remove(id) {
    return db('users')
      .where({ id })
      .del();
  }

// updates a user
  function update(changes, id) {
    return db("users")
      .where({ id })
      .update(changes)
      .then(count => {
        return findById(id);
      });
  }