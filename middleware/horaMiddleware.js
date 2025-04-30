module.exports = function (req, res, next){
    const dia = new Date();
    req.horaActual = dia.getHours();
    next();
    
};