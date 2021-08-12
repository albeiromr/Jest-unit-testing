const fetch = require("node-fetch");

const endpoint = "https://pokeapi.co/api/v2/pokemon/itto";

const getPokemon = async (endpoint) => {
  try {
    const request = await fetch(endpoint);
    const data = await request.json();
    return data;
  } catch (error) {
    console.log(new Error(error));
  };
};

getPokemon(endpoint);

module.exports = {
    getPokemon
}

