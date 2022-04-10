const express = require('express');
const { getReservationsController, getReservationController, deleteReservationController, updateReservationController, createReservationController } = require('../controller/reservas');
const authMiddleware = require('../middlewares/authMiddleware');
const { validateReservation } = require('../validators/reservas');
const router = express.Router();


// Get = /api/reservas - Devuelve todas las reservas
router.get("/", getReservationsController);

// Get = /api/reservas/:id - Devuelve una reserva filtrado por llave y Id
router.get("/:llave/:id", getReservationController);

// Delete = /api/reservas/:id - Borrar una reserva por Id
router.delete("/:id", authMiddleware, deleteReservationController);

// Update = /api/reservas/:id - Editar una reserva por Id
router.put("/:id", authMiddleware, updateReservationController);

// Post = /api/reservas - crea una reserva
router.post("/", authMiddleware, validateReservation, createReservationController);


module.exports = router;