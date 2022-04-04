const mongoose = require('mongoose');

const PostScheme = new mongoose.Schema(
    {
        titulo: {
            type: String
        },
        descripcion: {
            type: String
        },
        condiciones: {
            type: String
        },
        ubicacion: {
            type: Object
        },
        precio: {
            type: Number,            
        },
        imagenes: {
            imgCaratula: {
                type: String
            },
            imgGaleria: {
                type: Array
            },
        },        
        idUsuario: {
            type: String
        },
        reservas: {
            type: Array
        },
        servicios: {
            type: Object
        },
        rating: {
            type: Number
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model("posts", PostScheme);