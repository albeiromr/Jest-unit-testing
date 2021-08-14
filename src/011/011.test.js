const fetchPokemon = require("./011").fetchPokemon;

//creating an array of pokemons
const pokemonsArray = ["ditto", "pikachu", "charizard"];

//mocking the fetch pokemon function
const mockFetchPokemon = jest.fn((pokemon) => pokemon);

// function that calls the mock one
const processPokemonArray = (pokemons) => {
  for (let i = 0; i < pokemons.length; i++) {
    mockFetchPokemon(pokemons[i]);
  }
};

processPokemonArray(pokemonsArray);

test("firs call was with the ditto pokemon", () => {
  expect(mockFetchPokemon.mock.calls[0][0]).toMatch(/ditto/);
  expect(mockFetchPokemon.mock.results[0].value).toMatch(/ditto/);
});

test("second call was with the pikachu pokemon", () => {
  expect(mockFetchPokemon.mock.calls[1][0]).toMatch(/pikachu/);
  expect(mockFetchPokemon.mock.results[1].value).toMatch(/pikachu/);
});

test("third call was with the charizard pokemon", () => {
  expect(mockFetchPokemon.mock.calls[2][0]).toMatch(/charizard/);
  expect(mockFetchPokemon.mock.results[2].value).toMatch(/charizard/);
});

test("The last call to the mock function was called with the specified args", () => {
    expect(mockFetchPokemon).toHaveBeenLastCalledWith("charizard");
});

test("The mock function was called at least once with the specified args", () => {
    expect(mockFetchPokemon).toHaveBeenCalledWith("pikachu");
});

test("The mock function was called at least once", () => {
    expect(mockFetchPokemon).toHaveBeenCalled();
});

//testing the real fetchPokemon
test("function return the correct pokemon data", async () => {
  const data = await fetchPokemon("ditto");
  expect(data).toEqual({
    id: 132,
    name: "ditto",
    baseExperience: 101,
  });
});


