const fetch = require("node-fetch");

test("verifying pokemon´s first ability", () => {
  return fetch("https://pokeapi.co/api/v2/pokemon/itto")
    .then((response) => response.json())
    .then((data) => {
      expect(data.abilities[0].ability).toEqual({
        name: "limber",
        url: "https://pokeapi.co/api/v2/ability/7/",
      });
    })
    .catch(error => {
        expect(error.message).toMatch(/invalid json response body at/)
    });
});

