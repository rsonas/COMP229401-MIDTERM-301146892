var express = require('express');
var router = express.Router();

var carsController = require('../controllers/cars');

router.get('/', carsController.getAll);
router.post('/', carsController.create);
router.get('/:id', carsController.getCar); // wrong name
router.put('/:id', carsController.update);
router.delete('/:id', carsController.remove);

module.exports = router;