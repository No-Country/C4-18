const express = require('express');
const { uploadFileMiddleware } = require('../config/firebase');
const { getUsersController, getUserController, deleteUserController, updateUserController, contactUserController } = require('../controller/usuarios');
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

// Post = /api/usuario/contacto - Enviar un mensaje de contacto
router.post("/contacto", contactUserController);

module.exports = router;