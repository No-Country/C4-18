const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema(
    {
        nombre: {
            type: String
        },
        apellido: {
            type: String
        },
        telefono: {
            type: String
        },
        fechaDeNacimiento: {
            type: Number
        },
        correo: {
            type: String,
            unique: true
        },
        password: {
            type: String
        }, 
        avatar: {
            type: Array,
            default: ["https://storage.googleapis.com/homenocountry-7389e.appspot.com/img-624eee4dbbf3d81f40f9d001.1649340188620.png"]            
        },
        mediosDePago: {
            type: Array,
            default: []
        },
        reservas: {
            type: Array,
            default: []
        },
        posts: {
            type: Object,
            default: {}
        },
        rol: {
            type: String,
            default: "user"
        }

    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model("users", UserScheme);