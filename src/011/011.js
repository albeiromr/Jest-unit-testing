const fetch = require("node-fetch");

const fetchPokemon = async (pokemonName) => {
  const endpoint = "https://pokeapi.co/api/v2/pokemon/";
  const request = await fetch(`${endpoint}${pokemonName}`);
  const data = await request.json();
  const pokemonData = {
    id: data.id,
    name: pokemonName,
    baseExperience: data.base_experience,
  };
  return pokemonData;
};

const processPokemonArray = (pokemons) => {
  for (let i = 0; i < pokemons.length; i++) {
    fetchPokemon(pokemons[i]);
  };
};

module.exports = {
  fetchPokemon,
  processPokemonArray
};
