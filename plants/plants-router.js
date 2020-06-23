const router = require('express').Router();
const Plants = require('./plants-model.js');

const validatePlantsId = require('../middleware/validate-plantsId.js');

// find Ex: GET http://localhost:7171/api/plants
// !!!!!! WARNING REQUIRES A TOKEN!!! INCLUDING ALL OTHER REQUESTS IN THIS FILE!!!!!!
router.get('/', (req, res) => {
  Plants.find()
    .then(plants => {
      res.json(plants);
    })
    .catch(error => {
      res.status(500).json({ message: 'Failed to get plants.' });
    });
});


// get plants by id Ex: GET http://localhost:7171/api/plants/2
router.get('/:id', validatePlantsId, (req, res) => {
  const { id } = req.params;
  Plants.findById(id)
    .then(plants => {
        res.json(plants); 
    })
    .catch(error => {
      res.status(500).json({ message: 'Failed to get Plant.' });
    });
});



// updates plants by id Ex: PUT http://localhost:7171/api/plants/3 
router.put('/:id', validatePlantsId, (req, res) => {
  const { id } = req.params;
  const changes = req.body;
        Plants.update(changes, id).then(update => {
          res.json(update);
        })
    .catch(error => {
      res.status(500).json({ message: 'Failed to update plant.' });
	});
});

// deletes a id  Ex: DELETE http://localhost:7171/api/plants/3 
router.delete('/:id', validatePlantsId, (req, res) => {
  const { id } = req.params;

  Plants.remove(id)
    .then(deleted => {
        res.json({ message: `Plant with ID ${req.params.id} has been removed` });
      })
    
    .catch(error => {
      res.status(500).json({ message: 'Failed to delete plant.' });
    });
});


module.exports = router;
