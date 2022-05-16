//Routers
const express = require('express');
const router = express.Router();
const productController = require('../controllers/PokemonController');

//API Pokemon
router.post('/', productController.AddPokemon);
router.get('/', productController.GetPokemon);
router.put('/:id', productController.UpdatePokemon);
router.get('/:id', productController.GetAnyPokemon);
router.delete('/:id', productController.DeletePokemon);


module.exports = router;