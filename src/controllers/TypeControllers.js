const axios = require('axios')
const { Type } = require('../db.js')

const createTypesDb = async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/type')
    const types = response.data.results;
    const typeData = types.map((type) => ({name: type.name}));

    return await Type.bulkCreate(typeData)
}

module.exports = { createTypesDb }