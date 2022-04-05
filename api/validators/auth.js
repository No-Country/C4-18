const {check} = require('express-validator');
const { validateResult } = require('../utils/handleValidator');


const validateLogin = [
    check('correo').exists().notEmpty().isEmail(),
    check('password').exists().notEmpty(),
    (req, res, next)=>{
        validateResult(req, res, next);
    }
]

const validateSignUp = [
    check('nombre').exists().notEmpty(),
    check('correo').exists().notEmpty().isEmail(),
    check('telefono').exists().notEmpty(),
    check('password').exists().notEmpty().isLength({min:8, max:15}),
    (req, res, next) => {
      validateResult(req, res, next);
    },
]

module.exports = { validateLogin, validateSignUp };