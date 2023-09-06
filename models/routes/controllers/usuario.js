const {response}=require ('express')

//importación de los modelos
const Usuario = require('../models/usuario')

//Método Get de la API
const usuarioGet =async(req,res = response =>{
    //const {nombre} = req.query //Desestructuración

    //consultar todos los usuarios
    const usuarios= await Usuario.find()

    res.json({
        usuarios//Respuesta en json
    })

})

module.exports={
    usuarioGet
}

//metodo pos de la API
const usuarioPost = async(req,res)=>{
    res.json({
        msg:'Inserción Exitosa'
    })
}
 



//app-server-rutas-contralor - modelo