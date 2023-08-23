const axios = require("axios");
const { Pokemon, Type} = require("../db");



const getApiInfo = async () => {
    const getdataApi = (await axios.get('https://pokeapi.co/api/v2/pokemon?limit=24&offset=24')).data.results
    
    const promises = [];

    for(let data of getdataApi) {
        promises.push(axios(data.url))

    }

    let values = []
    for (let promise of promises){
        const value = await promise
        values.push(value)
    }
    const pokemonsAPI = []
    for(results of values){
        const types = results.data.types.map((type)=> type.type.name).join(', ')
        const getIntoStats = results.data.stats.map((data)=> ({
            stat: data.base_stat,
            name: data.stat.name}) );
         const attack = getIntoStats.find((value) => value.name === 'attack' ).stat;
        pokemonsAPI.push({
            id: results.data.id,
            name: results.data.name,
            image: results.data.sprites.other['official-artwork'].front_default,
            attack: attack,
            type: types
        }) 
    }
    const allData = [...pokemonsAPI];
    return allData;
}
const createPokemon = async (
    name,
    image,
    life,
    attack,
    defense,
    speed,
    weight,
    types
) => {
    try {
        const newPokemon = await Pokemon.create({
            name,
            image,
            life,
            attack,
            defense,
            speed,
            weight,
            type: types
        });
        return newPokemon;
    } catch (error) {
        throw new Error(`Error creating Pokemon: ${error.message}`);
    }
};

module.exports = { 
    createPokemon,
    getApiInfo }