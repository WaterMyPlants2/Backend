const router = require('express').Router();
const Users = require('./users-model.js');
const bcrypt = require('bcryptjs');

const Plants = require('../plants/plants-model.js');
const validateUserId = require('../middleware/validate-userId.js');

// gets a list of all users Ex: GET localhost:7171/api/users
router.get('/', (req, res) => {
	Users.find()
		.then((users) => {
			res.status(200).json(users);
		})
		.catch((err) => res.status(400).json({ message: 'An Error occurred when retrieving list of users' }))
});


// gets all plants associated with a specific user by id Ex: GET localhost:7171/api/users/:id/plants
router.get('/:id/plants', validateUserId, (req, res) => {

	Users.findPlantsById(req.params.id)
	.then((plants) => res.status(200).json(plants))
	.catch((error) => {
		console.log('error', error)
		res.status(500).json({ message: 'An Error occurred when retrieving info for user id' });
	});
});

// gets a user by id Ex: GET localhost:7171/api/users/:id
router.get('/:id', validateUserId, (req, res) => {
	const { id } = req.params;
	Users.findById(id)
		.then((user) => {
			res.status(200).json(user);
			})
		.catch((error) => {
			res.status(500).json({ message: 'Failed to get that user' });
		});
});

// create plants with user id Ex: POST localhost:7171/api/users/:id/plants
router.post('/:id/plants', validateUserId, (req, res) => {
	const plants = { ...req.body, user_id: req.params.id };

	Plants.add(plants)
	.then((added) => res.status(201).json(added))
	.catch((error) => {
		res.status(500).json({ message: 'There are no plants with this user' });
	});
});

// updates a user by id Ex: POST http://localhost:7171/api/users/:id
router.put('/:id', validateUserId, (req, res) => {
	const { id } = req.params;
	const changes = req.body;
	if (changes.password) {
		changes.password = bcrypt.hashSync(changes.password, 8);
	}
				Users.update(changes, id).then((updatedUser) => {
					res.status(200).json(updatedUser);
				})
		.catch((error) => {
			res.status(500).json({ message: 'Failed to update that user.' });
		});
});

// deletes user by id Ex: DELETE http://localhost:7171/api/users/:id
router.delete('/:id', validateUserId, (req, res) => {
	const { id } = req.params;

	Users.remove(id)
		.then((deleted) => {
				res.json({ message: `User with ID ${req.params.id} has been removed` });
			})
		.catch((error) => {
			res.status(500).json({ message: 'Failed to delete that user.' });
		});
});


module.exports = router;
