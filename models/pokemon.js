const {Schema, model} = require("mongoose");


//creating a new schema
const pokemonSchema = new Schema({
  name: { type: String, required: true },
  img: { type: String}
});
const Pokemon = model("pokemon", pokemonSchema);

module.exports = Pokemon;