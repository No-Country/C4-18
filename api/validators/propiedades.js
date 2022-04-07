const {check} = require('express-validator');
const { validateResult } = require('../utils/handleValidator');

const validatePost = [
    check('titulo').exists().notEmpty(),
    check('descripcion').exists().notEmpty(),
    check('condiciones').exists().notEmpty(),
    check('ubicacion').exists(),
    check('precio').exists().notEmpty(),    
    check('idUsuario').exists().notEmpty(),    
    check('servicios').exists(),    
    (req, res, next)=>{
        validateResult(req, res, next);
    }   
]

module.exports = {validatePost};