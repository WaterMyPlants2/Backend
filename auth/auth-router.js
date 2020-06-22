const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/users-model.js');
const constants = require("../config/constants.js");

// register new user Ex: POST localhost:7171/api/auth/register
router.post('/register', (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 8); 
  user.password = hash;

  Users.add(user)
    .then(saved => {
      // a jwt should be generated
      const token = generateToken(saved);
      res.status(201).json({
        user: saved, token
      });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});


// login user Ex: POST localhost:7171/api/auth/login
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        // a jwt should be generated
        const token = generateToken(user);

        res.status(200).json({message: `Welcome ${user.username}!`, token: token });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});


function generateToken(user) {
  // header payload and verify signature
  // payload -> username, id, roles, expiration date
  const payload = {
    sub: user.id,
    username: user.username,
    phonenumber: user.phonenumber
  };

  const secret = constants.jwtSecret;
  const options = {
    expiresIn: "3d"
  };
  // verify signature -> a secret
  return jwt.sign(payload, secret, options);
}

module.exports = router;