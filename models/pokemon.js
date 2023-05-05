const {Schema, model} = require("mongoose");

const pokemondb = [
  {name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur"},
  {name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur"},
  {name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur"},
  {name: "charmander", img: "http://img.pokemondb.net/artwork/charmander"},
  {name: "charizard", img: "http://img.pokemondb.net/artwork/charizard"},
  {name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle"},
  {name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle"}
];

//creating a new schema
const pokemonSchema = new Schema({
  name: { type: String, required: true },
  img: { type: String}
});
const Pokemon = model("pokemon", pokemonSchema);

module.exports = Pokemon;