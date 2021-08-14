const fetch = require("node-fetch");

const endpoint = "https://pokeapi.co/api/v2/pokemon/ditto";

const getPokemon = async (endpoint) => {
  try {
    const request = await fetch(endpoint);
    const data = await request.json();
    return data;
  } catch (error) {
    //Do stuff
  };
};

getPokemon(endpoint);

module.exports = {
    getPokemon
}

