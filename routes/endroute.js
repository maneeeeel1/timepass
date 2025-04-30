const express = require("express");
const router = express.Router();
const horaMiddleware = require("../middleware/horaMiddleware");
const validarHora = require("../middleware/validarHora");

router.get("/", horaMiddleware, validarHora, (req,res)=>{
    res.send(`
       <h1>Bienvenido a /endroute</h1>
       <p>Ruta final alcanzada correctamente.</p>  
        `);
});

module.exports = router;