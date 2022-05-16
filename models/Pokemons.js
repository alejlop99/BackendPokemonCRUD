const mongoose = require('mongoose');

const SchemaPokemon= mongoose.Schema({
  id: {
    type: 'Number',
    require:true
  },

  image: {
    type: 'String',
    require:true
  },

  name: {
    type: 'String',
    require:true
  },

  type: {
    type: 'Array',
    require:true
  },

  stats: {
    type: 'Array',
    require:true
  },
});

module.exports = mongoose.model('Pokemon', SchemaPokemon)