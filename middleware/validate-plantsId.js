const db = require('../plants/plants-model')

module.exports = (req, res, next) => {
  const { id } = req.params

  db.findById(id)
    .then((plant) => {
      if (plant) {
      next()
      } else {
        res.status(404).json({ message: 'invalid id' })
      }
    })
    .catch(() => {
      res.status(500).json({ error: 'Error, unable to retrieve information' })
  })
}