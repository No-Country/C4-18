const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();


// Get = /api/propiedades - Devuelve todas las propiedades
router.get("/", );

// Get = /api/propiedades/usuario/:id - Devuelve todas las propiedades del usuario
router.get("/usuario/:id", authMiddleware);

// Get = /api/propiedades/?campo - Devuelve propiedad por campo seleccionado
router.get("/:campo", );

// Post = /api/propiedades - Crear un post
router.post("/", authMiddleware);

// Delete = /api/propiedades/:id - Eliminar una propiedad
router.delete("/:id", authMiddleware);

// Update = /api/propiedades/:id - Editar una propiedad
router.put("/:id", authMiddleware);

module.exports = router;