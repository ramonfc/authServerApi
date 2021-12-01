const {Router} = require('express')
const logicaAuth = require('../service/logicaAuth')
const jwt = require('jsonwebtoken')

const key = 'CLAVEDIFICIL'

const router = Router()

router.post('/login',async (request,response)=>{

    const {mensaje,status}= await logicaAuth(request.body)  //
    //console.log('soyelconsolelog:',mensaje, status)
    return response.status(status).json({ access_token: mensaje })
     
    // jwt.verify(token)
    // if token
    // sdfbdsjfb
    // else
    // error
    // jwt.payload['rol'] == 'Admin' ??? si si ok lo deja pasar y si no error

})

router.get('/verify', (request,response)=>{

    const token = request.headers['authorization']
    try{
        const tokenVerificado = jwt.verify(token,key)
        if (!tokenVerificado){
            return response.json( {response: "error, no tienes un token valido"})
        }
        return response.json({ rol: tokenVerificado.rol,
             nombre:tokenVerificado.name })

    }catch{
        return response.json({error: "error de servidor o token invalido"})
    }

})




module.exports = router