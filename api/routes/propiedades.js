const express = require('express');
const router = express.Router();


// Get = /api/propiedades - Devuelve todas las propiedades
router.get("/", );

// Get = /api/propiedades/usuario/:id - Devuelve todas las propiedades del usuario
router.get("/usuario/:id", );

// Get = /api/propiedades/?campo - Devuelve propiedad por campo seleccionado
router.get("/:campo", );

// Post = /api/propiedades - Crear un post
router.post("/", );

// Delete = /api/propiedades/:id - Eliminar una propiedad
router.delete("/:id", );

// Update = /api/propiedades/:id - Editar una propiedad
router.put("/:id", );

module.exports = router;