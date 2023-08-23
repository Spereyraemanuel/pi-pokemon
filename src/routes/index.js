const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const getPokemons = require("./getPokemons")
const getTypes = require("./getTypes")

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/pokemons", getPokemons)
router.use("/types", getTypes)



module.exports = router;
