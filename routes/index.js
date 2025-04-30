const express = require("express");
const router = express.Router();
const horaMiddleware=require("../middleware/horaMiddleware");

router.get("/", horaMiddleware, (req, res) =>{
    const mensaje = req.query.mensaje;
    const hora = req.horaActual;

    res.send(`
        <h1>Bienvenido</h1>
        <p>Hora actual: ${hora}:00</p>
        ${mensaje ? `<p>${mensaje}</p>` : ""}
        <form action ="/endroute" method="GET">
            <button type="submit">Ir a /endroute</button>
        </form>
        `)
});

module.exports = router;