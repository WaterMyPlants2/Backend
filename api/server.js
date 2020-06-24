const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const middleware = require('../middleware/auth-middleware.js')

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');
const plantsRouter = require('../plants/plants-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());


server.use("/api/auth", authRouter);
server.use("/api/users", middleware, usersRouter);
server.use('/api/plants', middleware, plantsRouter);

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;

  
