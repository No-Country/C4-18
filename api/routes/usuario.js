const express = require('express');
const { uploadFileMiddleware } = require('../config/firebase');
const { getUsersController, getUserController, deleteUserController, updateUserController } = require('../controller/usuarios');
const authMiddleware = require('../middlewares/authMiddleware');
const { upload } = require('../utils/handleStorage');
const router = express.Router();


// Get = /api/usuario - Devuelve todos los usuarios
router.get("/", getUsersController);

// Get = /api/usuario/:llave/:id - Devuelve un usuario filtrado por Id
router.get("/:llave/:valor", getUserController);

// Delete = /api/usuario/:id - Borrar un usuario por Id
router.delete("/:id", authMiddleware, deleteUserController);

// Update = /api/usuario/:id - Editar un usuario por Id
router.put("/:id", authMiddleware, upload.any("avatar"), uploadFileMiddleware, updateUserController);

module.exports = router;