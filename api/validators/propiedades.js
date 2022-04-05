const {check} = require('express-validator');

const validatePost = [
    check('titulo').exists().notEmpty(),
    check('descripcion').exists().notEmpty(),
    check('condiciones').exists().notEmpty(),
    check('ubicacion').exists().notEmpty(),
    check('precio').exists().notEmpty(),
    check('imagenes').exists().notEmpty(),
    check('imagenes.imgCaratula').exists().notEmpty(),
    check('imagenes.imgGaleria').exists().notEmpty(),
    check('idUsuario').exists().notEmpty(),
    check('reservas').exists(),
    check('servicios').exists().notEmpty(),
    check('rating').exists(), 
    (req, res, next)=>{
        validateResult(req, res, next);
    }   
]

module.exports = {validatePost};