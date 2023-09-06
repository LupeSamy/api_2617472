//archivo de conneccion
const mongoose = require('mongoose')
const dbConnection = async ()=>{
    try{
        mongoose.connect(process.env.MONGO_CNN)
        console.log('Conexion exitosa a la base de datos mongo ')
    }
    catch(error){
        console.log(error)
        // throw error conectando a la base de dato
    }
}
//exportar la cadena de conexión
module.exports = {dbConnection}
//este codigo es estandar
