require("dotenv").config();
const { Type } = require("../db");
const {Router} = require("express")
const {createTypesDb} = require("../controllers/TypeControllers");
const router = Router()

router.get('/', async (req, res) => {
    try {
        const createTypesPokemons = await createTypesDb()
        res.status(200).json(createTypesPokemons)
    } catch (error) {
        res.status(404).json(error.message)
    }
}
)

module.exports = router
