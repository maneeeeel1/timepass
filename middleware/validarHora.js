module.exports = function (req, res, next){
    const hora = req.horaActual;

    if(hora>=12 && hora <=23){
        return next();
    }

    const mensaje ="Hasta las 12 no se puede entrar!!!";
    return res.redirect("/?mensaje=" + encodeURIComponent(mensaje));
};