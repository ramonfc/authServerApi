require('./infraestructura/conexion')
const {validarToken,admin} = require('./middleware/middlewares')
const cors = require('cors')


const authRoutes = require('./routes/authRoutes')
const express = require('express')

const api = express()


api.use(cors())
api.use(express.json())  //PARA TRABAJAR CON JSON

api.get('/test',(req,res)=>{
    return res.send("Esto es un string de respuesta en REST API")

})

api.use('/api', authRoutes) //autenticacion

// autorizacion
//api.use('/api/dashboard',[verifiqueToken, VerifiqueAdmin])
api.get('/api/listarUsuarios',[validarToken,admin], (req,res)=>{
    return res.send('ok')
    //consulta a mongo
    //retornar la data
})


api.listen("9093", ()=> console.log("prend[i el servidor"))