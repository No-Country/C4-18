const express = require('express');
const { loginController, signUpController, logoutController } = require('../controller/auth');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

const { validateLogin, validateSignUp } = require('../validators/auth');


// Post = /api/auth/login - Loguear usuario
router.post("/login", validateLogin, loginController);


// Post = /api/auth/signup - Crear usuario
router.post("/signup", validateSignUp, signUpController);


// Post = /api/auth/logout - Logout usuario
router.post("/logout", authMiddleware, logoutController);


module.exports = router;