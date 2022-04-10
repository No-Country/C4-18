const {check} = require('express-validator');
const { validateResult } = require('../utils/handleValidator');

const validateReservation = [
    check('idUser').exists().notEmpty(),
    check('idPost').exists().notEmpty(),
    check('startDate').exists().notEmpty(),
    check('endDate').exists().notEmpty(),    
    check('payment').exists(),    
    (req, res, next)=>{
        validateResult(req, res, next);
    }   
]

module.exports = {validateReservation};