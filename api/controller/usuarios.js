const { usersModel } = require("../models");
const { handleErrorResponse, handleHttpError } = require("../utils/handleError");


// // Get = /api/usuario - Devuelve todos los usuarios
// router.get("/", );
const getUsersController = async (req, res) => {
    try {
      const data = await usersModel.find();   
     
      if (data.length === 0) {
        handleErrorResponse(res, "USER_NOT_FOUND", 404);
        return;
      }
      
      res.send({ data });
  
    } catch (e) {
      handleHttpError(res, e);
    }
};

// // Get = /api/usuario/:id - Devuelve un usuario filtrado por llave y Id
// router.get("/:llave/:valor", );

const getUserController = async (req, res) => {  
    try {
      const llave = req.params.llave;
      const valor = req.params.valor;
      
      const user = await usersModel.find({[llave]:valor});
      
      if (!user) {
        handleErrorResponse(res, "USER_NOT_FOUND", 404);
        return;
      }
      res.send({user})   
        
    } catch (e) {
        handleHttpError(res, e);
    }
};

// // Delete = /api/usuario/:id - Borrar un usuario por Id
// router.delete("/:id", authMiddleware);

const deleteUserController = async (req, res) => {
    try {
      const id = req.params.id;
      const user = await usersModel.deleteOne({_id:id});    
      res.send({user})
    } catch (e) {
      handleHttpError(res, e);
    }
};

// // Update = /api/usuario/:id - Editar un usuario por Id
// router.put("/:id", authMiddleware);

const updateUserController = async (req, res) => {
    try {
      const id = req.params.id;      
      let body = req.body;
      const user = await usersModel.findById(id);
      
      if (!user) {
        handleErrorResponse(res, "USER_NOT_FOUND", 401);
        return;
      }    
      
      if(req.files){
        body = {...body, avatar: req.files.firebaseUrl}
      }
      console.log("BODY UPDATE: ", body)
      const data = await usersModel.findByIdAndUpdate(id, body, {
        new: true,
      })     
      
      res.send({data})
    } catch (e) {
      handleHttpError(res, e);
    }
};



module.exports = {getUsersController, getUserController, deleteUserController, updateUserController}