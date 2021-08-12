const getPokemon = require("./009").getPokemon;

const endpoint = "https://pokeapi.co/api/v2/pokemon/ditto";
const badEndpoint = "https://pokeapi.co/api/v2/pokemon/itto";

test("Pokemon information is received", async () => {
  const data = await getPokemon(endpoint);
  expect(data.id).toBeDefined();
});

test("Pokemon id is correct", async () => {
  const data = await getPokemon(endpoint);
  expect(data.id).toBe(132);
});

test("error when sending a bad pokemon info to the backend", async () => {
  //expect.assertions(1);
  try {
    await getPokemon(badEndpoint);
  } catch (error) {
    expect(error.message).toMatch(/invalid json response body at/);
  };
});
