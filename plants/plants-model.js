const db = require('../database/dbConfig.js');

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};

// finds plant
function find() {
  return db('plants');
}

// finds plant by specific id
function findById(id) {
  return db('plants')
    .where({ id })
    .first();
}

// adds new plant
function add(plant) {
  return db('plants')
    .insert(plant)
    .then(ids => {
      return findById(ids[0]);
    });
}

// updates plant by specific id
function update(changes, id) {
  return db('plants')
    .where({ id })
    .update(changes)
    .then(count => {
      return findById(id);
    });
}

// removes plant by specific id
function remove(id) {
  return db('plants')
    .where({ id })
    .del();
}