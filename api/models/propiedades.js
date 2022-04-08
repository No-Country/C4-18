const mongoose = require("mongoose");

const PostScheme = new mongoose.Schema(
  {
    titulo: {
      type: String,
    },
    descripcion: {
      type: String,
    },
    condiciones: {
      type: String,
    },
    ubicacion: {
      type: Object,
    },
    precio: {
      type: Number,
    },
    imagenes: {
      type: Array,
    },
    idUsuario: {
      type: String,
    },
    reservas: {
      type: Array,
    },
    servicios: {
      type: Object,
    },
    rating: {
      type: Number,
    },
    ciudad:{
      type: String,
    },
    capacidad:{
      type: Number,
    },
    ducha:{
      type: Boolean,
    },
    internet:{
      type: Boolean,
    },
    estacionamiento:{
      type: Boolean,
    },
    metraje:{
      type: Number,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("posts", PostScheme);
