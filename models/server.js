const express =require('express')
const cookieParser = require('cookie-parser');
const cors = require('cors'); //Implementar seguridad
const bodyParser = require('body-parser')
const {dbConnection}=require('../database/config');

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT //capturando variable
        this.usuarioPath ='/api/usuario'//ruta publica
        this.conectarDB()
        this.routes()

    }

    listen(){
        this.app.listen(this.port, ()=> {
            console.log(`Escuchando por el puerto ${this.port}`)
        })
    }
    async conectarDB(){
        await dbConnection()//Esperar la respuesta del servidor 
        // siempre que hay un async tendra un await
    }
    routes(){
        this.app.use(this.usuarioPath,require('../routes/usuario'))
    }

}

module.exports = Server
