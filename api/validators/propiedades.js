const {check} = require('express-validator');

const validatePost = [
    check('titulo').exists().noEmpty(),
    check('descripcion').exists().noEmpty(),
    check('condiciones').exists().noEmpty(),
    check('ubicacion').exists().noEmpty(),
    check('precio').exists().noEmpty(),
    check('imagenes').exists().noEmpty(),
    check('imagenes.imgCaratula').exists().noEmpty(),
    check('imagenes.imgGaleria').exists().noEmpty(),
    check('idUsuario').exists().noEmpty(),
    check('reservas').exists(),
    check('servicios').exists().noEmpty(),
    check('rating').exists(), 
    (req, res, next)=>{
        validateResult(req, res, next);
    }   
]

module.exports = {validatePost};