const jwt = require('jsonwebtoken')

const key = 'CLAVEDIFICIL'

const validarToken = (req,res,next)=>{

    const token = req.headers['authorization']
    
    if (!token){
        return res.json('error no tienes un token')
    }

    
    try{
        const tokenVerificado = jwt.verify(token,key)
        if (!tokenVerificado){
            return res.json('error, no tienes un token valido')
        }
        req.rol = tokenVerificado.rol

    }catch{
        return res.json('catch: error de servidor')
    }

    

    next()

}

const admin = (req,res,next)=>{

    if( req.rol == 'Admin' ){
        next()
    }
    return res.send(" no tienes permiso de adminsiutrador ")


}



module.exports =  {
    validarToken,
    admin

}