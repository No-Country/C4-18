const { matchedData } = require("express-validator");
const { reservationModel, usersModel, postsModel } = require("../models");
const { handleErrorResponse, handleHttpError } = require("../utils/handleError");


// // Get = /api/reserva - Devuelve todas las reservas
// router.get("/", );
const getReservationsController = async (req, res) => {
    try {
      const data = await reservationModel.find();   
     
      if (data.length === 0) {
        handleErrorResponse(res, "RESERVATION_NOT_FOUND", 404);
        return;
      }
      
      res.send({ data });
  
    } catch (e) {
      handleHttpError(res, e);
    }
};

// // Get = /api/reserva/:id - Devuelve una reserva filtrado por llave y Id
// router.get("/:llave/:id", );

const getReservationController = async (req, res) => {  
    try {
      const llave = req.params.llave;
      const id = req.params.id;
      
      const reservation = await reservationModel.find({[llave]:id});
      
      if (!reservation) {
        handleErrorResponse(res, "RESERVATION_NOT_FOUND", 404);
        return;
      }
      res.send({reservation})   
        
    } catch (e) {
        handleHttpError(res, e);
    }
};

// // Post = /api/reserva - crea una reserva
// router.post("/", authMiddleware);
const createReservationController = async (req, res) => {
    try {
        const body = matchedData(req);
        
        const checkUser = await usersModel.findOne({ _id: body.idUser });
        if (!checkUser) {
          handleErrorResponse(res, "USER_NOT_FOUND", 401);
          return;
        }
        const checkPost = await postsModel.findOne({ _id: body.idPost });
        if (!checkPost) {
          handleErrorResponse(res, "POST_NOT_FOUND", 401);
          return;
        }
        
        const data = await reservationModel.create(body);
        res.send({ data });
      } catch (e) {
        handleHttpError(res, e);
      }
};

// // Delete = /api/reserva/:id - Borrar una reserva por Id
// router.delete("/:id", authMiddleware);

const deleteReservationController = async (req, res) => {
    try {
      const id = req.params.id;
      const reservation = await reservationModel.deleteOne({_id:id});    
      res.send({reservation})
    } catch (e) {
      handleHttpError(res, e);
    }
};

// // Update = /api/reserva/:id - Editar una reserva por Id
// router.put("/:id", authMiddleware);

const updateReservationController = async (req, res) => {
    try {
      const id = req.params.id;      
      
      const reservation = await reservationModel.findById(id);
      
      if (!reservation) {
        handleErrorResponse(res, "RESERVATION_NOT_FOUND", 401);
        return;
      }      

      const updated = await reservationModel.findByIdAndUpdate(id, req.body , {
        new: true,
      })     
      
      res.send({updated})
    } catch (e) {
      handleHttpError(res, e);
    }
};



module.exports = {getReservationsController, getReservationController, createReservationController, deleteReservationController, updateReservationController}