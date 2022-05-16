const Data_Pokemon = require("../models/Pokemons");

exports.AddPokemon = async (req, res) => {
  
  try {
    let Pokemon;

    Pokemon = new Data_Pokemon(req.body);

    Pokemon.save();
    res.send(Pokemon);

  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
} 

exports.GetPokemon = async (req, res) => {

  try {

    const products = await Data_Pokemon.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

exports.UpdatePokemon = async (req, res) => {

  try {

    const {Pokemon, Category} = req.body;
    let P = await Data_Pokemon.findById(req.params.id);
    if (!P) {
      res.status(404).json({msj: 'Not Found'});
    }
    P.Pokemon= Pokemon;
    P.Category= Category;
    P = await Data_Pokemon.findOneAndUpdate({ _id:req.params.id }, P, {new:true});
    res.json(P);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

exports.GetAnyPokemon = async (req, res) => {

  try {

    let P = await Data_Pokemon.findById(req.params.id);

    if (!P) {
      res.status(404).json({msj: 'Not Found'});
    }

    res.json(P);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

exports.DeletePokemon = async (req, res) => {

  try {

    let P = await Data_Pokemon.findById(req.params.id);

    if (!P) {
      res.status(404).json({msj: 'Not Found'});
    }
    await Data_Pokemon.findOneAndRemove({_id: req.params.id})
    res.json({msj: 'Pokemon Delete '});
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}