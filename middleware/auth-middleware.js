const jwt = require('jsonwebtoken');
const constants = require('../config/constants.js');

  //    see if there is a token
  //    if there is one, check if it valid =>
  //    rehash the header + payload + secret and see if it matches our verify signature

module.exports = (req, res, next) => {
  const token = req.headers.authorization; 

  if (token) {
    jwt.verify(token, constants.jwtSecret, (err, decodedJwt) => {
      if (err) {
        res.status(401).json({ message: 'Error verifying token' });
      } else {
        req.decodedJwt = decodedJwt;
        next();
      }
    })
  } else {
    res.status(401).json({ message: 'Invalid token' })
  }
};