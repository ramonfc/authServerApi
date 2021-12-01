const { Schema, model } = require('mongoose')

const usuario = new Schema({
    email: {
        type: String,
        required: true
    },
    identificacion: {
        type: Number,
        required: true,
        unique: true,
        dropDups: true
    },
    nombre: {
        type: String,
        required: true
    },
    clave: {
        type: String,
        required: true
    },
    perfil: {
        type: String,
        required: false,
        default: 'Pendiente'
    },
    activo: {
        type: Boolean,
        required: false,
        default: false
    }


},
    {
        timestamps: true
    })
module.exports = model('usuarios', usuario, "usuarios")