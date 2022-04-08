const express = require('express');
const { getPostsController, getPostController, deleteImgPostController, createPostController, deletePostController, updatePostController } = require('../controller/propiedades');
const authMiddleware = require('../middlewares/authMiddleware');
const {validatePost} = require('../validators/propiedades')
const router = express.Router();
const {upload} = require('../utils/handleStorage');
const { uploadFileMiddleware } = require('../config/firebase');


// Get = /api/propiedades - Devuelve todas las propiedades
router.get("/", getPostsController);

// Get = /api/propiedades/:campo/:valor - Devuelve propiedad por campo seleccionado
router.get("/:campo/:valor", getPostController );

// Post = /api/propiedades - Crear un post
// router.post("/", authMiddleware, upload.any("imagenes"), validatePost, uploadFileMiddleware ,createPostController);
router.post("/", authMiddleware, upload.any("imagenes"), uploadFileMiddleware ,createPostController);

// Delete = /api/propiedades/:id - Eliminar una propiedad
router.delete("/:id", authMiddleware, deletePostController);

router.delete("/:publicacion/:imagen", authMiddleware, deleteImgPostController);

// Update = /api/propiedades/:id - Editar una propiedad
router.put("/:id", authMiddleware, upload.any("imagenes"), uploadFileMiddleware, updatePostController);

module.exports = router;