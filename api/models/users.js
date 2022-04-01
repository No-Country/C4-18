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
            type: String
        },
        mediosDePago: {
            type: Array
        },
        reservas: {
            type: Array
        },
        posts: {
            type: Object
        },
        rol: {
            type: ["admin", "user"],
            default: "user"
        }

    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model("users", UserScheme);