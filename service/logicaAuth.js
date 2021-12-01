const User = require('../model/usuariosModel')
const aes256 = require('aes256')
const jwt = require('jsonwebtoken')
const key = "CLAVEDIFICIL"

const logicaAuth = async (datosPeticion) => {

    try {
        //console.log(datosPeticion)
        const usuario = await User.findOne({ email: datosPeticion?.email })
        // verificar si esta activo.
        //console.log('usuarioMOngo:',usuario)
        if (!usuario) {   
                return  {mensaje:"Verique usuario y contrasena",status: 401}    
        }

        //console.log("claveee ", usuario.clave)
        const claveDesencriptada = aes256.decrypt(key, usuario.clave)
        //console.log("claveee Desencriptada", claveDesencriptada)
        if (datosPeticion.clave != claveDesencriptada) {  
                return  {mensaje:"Verique usuario y contrasena",status: 401} 
        }

        const token = jwt.sign({

            rol: usuario.perfil,
            name: usuario.nombre

        }, key, { expiresIn: 1500 })
        //console.log('token::::',token)
        return {mensaje:token,status: 200} 
        

    } catch (error) {
        //console.log(error)
        return {mensaje:"COntante al admin",status: 500} 
    }
    // pasarnos 2 parametros. correo y contrase;a
    // debemos verfiicar el correo que exista
    // y si es valido,
    // luego verificar la contrase;a 
    // .... consultas en mongo. 
    // una vez se aprueben las dos condiciones.
    // se crea el jwt y se le responde al cliente.

}

module.exports = logicaAuth