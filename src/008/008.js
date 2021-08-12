const fetch = require("node-fetch");

fetch("https://pokeapi.co/api/v2/pokemon/itto")
.then(data => data.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log(Object.keys(error))
    console.log(error.message)
})




