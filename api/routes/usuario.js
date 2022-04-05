const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();


// Get = /api/usuario - Devuelve todos los usuarios
router.get("/", );

// Get = /api/usuario/:id - Devuelve un usuario filtrado por Id
router.get("/:id", );

// Get = /api/usuario/email/:id - Devuelve un usuario filtrado por email
router.get("/email/:id", );

// Delete = /api/usuario/:id - Borrar un usuario por Id
router.delete("/:id", authMiddleware);

// Update = /api/usuario/:id - Editar un usuario por Id
router.put("/:id", authMiddleware);

module.exports = router;