const {check} = require('express-validator');
const { validateResult } = require('../utils/handleValidator');


const validateLogin = [
    check('correo').exists().noEmpty(),
    check('password').exists().noEmpty(),
    (req, res, next)=>{
        validateResult(req, res, next);
    }
]

const validateSignUp = [
    check('nombre').exists().noEmpty(),
    check('correo').exists().noEmpty(),
    check('telefono').exists.noEmpty(),
    check('password').exists.noEmpty().isLength({min:8, max:15}),
    (req, res, next) => {
      validateResult(req, res, next);
    },
]

module.exports = { validateLogin, validateSignUp };