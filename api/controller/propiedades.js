const { matchedData } = require("express-validator");
const { postsModel } = require("../models");
const { handleErrorResponse, handleHttpError } = require("../utils/handleError");

// Get = /api/propiedades - Devuelve todas las propiedades
const getPostsController = async (req, res) => {
    try {
      const data = await postsModel.find();   
     
      if (data.length === 0) {
        handleErrorResponse(res, "POSTS_NOT_FOUND", 404);
        return;
      }
      
      res.send({ data });
  
    } catch (e) {
      handleHttpError(res, e);
    }
};
// Get = /api/propiedades/:campo/:valor - Devuelve propiedad por campo seleccionado
const getPostController = async (req, res) => {  
    try {
      const campo = req.params.campo;
      const valor = req.params.valor;
      
      const post = await postsModel.find({[campo]:valor});
      
      if (!post) {
        handleErrorResponse(res, "POSTS_NOT_FOUND", 404);
        return;
      }
      res.send({post})   
        
    } catch (e) {
        handleHttpError(res, e);
    }
};

// Post = /api/propiedades - Crear un post
const createPostController = async (req, res) => {
    try {
      console.log('Files', req.files)
      let imagenes = [];
      if (req.files){ imagenes = [...imagenes, ...req.files.firebaseUrl]}
      const body = {...matchedData(req), imagenes: imagenes};
      console.log(matchedData(req))
      const post = await postsModel.create(body);
      
      res.send({post});
    } catch (e) {
      handleHttpError(res, e);
    }
};

// Delete = /api/propiedades/:id - Eliminar una propiedad
const deletePostController = async (req, res) => {
    try {
      const idPost = req.params.id;
      const post = await postsModel.deleteOne({_id:idPost});    
      res.send({post})
    } catch (e) {
      handleHttpError(res, e);
    }
};

const deleteImgPostController = async (req, res) => {
  try {
    const idPost = req.params.publicacion;  
    const idImg = req.params.imagen;  

    const post = await postsModel.findById(idPost);

    const filterImages = post.imagenes.filter(img => img.split('/').pop() !== idImg)

    const updatedPost = await postsModel.findByIdAndUpdate(idPost, {"imagenes":filterImages} , {
      new: true,
    }) 
   
    console.log("DATA:", filterImages)

    res.send({updatedPost})

  } catch (e) {
    handleHttpError(res, e);
  }
};

// Update = /api/propiedades/:id - Editar una propiedad
const updatePostController = async (req, res) => {
    try {
      const idPost = req.params.id;      
      
      const post = await postsModel.findById(idPost);
      
      if (!post) {
        handleErrorResponse(res, "POSTS_NOT_FOUND", 404);
        return;
      }
      let imageUrlArray = [...post.imagenes]

      
      if (req.files){
          imageUrlArray = [...imageUrlArray, ...req.files.firebaseUrl]
      }      

      const body = {...req.body, imagenes: imageUrlArray};

      const updatedPost = await postsModel.findByIdAndUpdate(idPost, body , {
        new: true,
      })     
      
      res.send({updatedPost})
    } catch (e) {
      handleHttpError(res, e);
    }
};

module.exports = {getPostsController, getPostController, createPostController, deleteImgPostController, updatePostController, deletePostController}