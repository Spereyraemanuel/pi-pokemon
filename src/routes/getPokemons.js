const {Router} = require("express");
const {getApiInfo, createPokemon} = require("../controllers/PokemonsControllers");
const router = Router();


router.get("/", async (req, res) => {
    try {
        const pokemons = await getApiInfo();
        res.status(200).json(pokemons)
    } catch (error) {
        res.status(400).json(`el error esta en: ${error.message}`)
    }
})

router.get("/name", async (req,res) => {
   try {
    const {name} = req.query
    const pokemons = await getApiInfo(name);
    if(name) {
        const resultFind = await pokemons.filter((pok)=> pok.name.toLowerCase().includes(name.toLowerCase()))
   if (resultFind.length === 0) {
    return res.status(404).json(`no se encontro ese pokemon`)
   }
   return res.status(200).json(resultFind);
    }else{
        return res.status(400).json("error");
    }
   } catch (error) {
    res.status(400).json(`no se encontro porque ${error.message}`)
   }
})

router.post("/create", async (req, res) => {
    try {
        const {
            name,
            image,
            life,
            attack,
            defense,
            speed,
            weight,
            type
        } = req.body;

        const newPokemon = await createPokemon(
            name,
            image,
            life,
            attack,
            defense,
            speed,
            weight,
            type
        );

        res.status(200).json(newPokemon);
    } catch (error) {
        res.status(400).json({ error: error.message }); // Devuelve el mensaje de error en un objeto JSON
    }
});

module.exports = router;