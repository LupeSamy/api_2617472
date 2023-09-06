const {Schema, model}=requiere('mongoose')
//Schema es una funcion que va a permitir 

//crear los atributos, definir tipo de dato(type),unique->para que nos se repita
const UsuarioSchema=Schema({
    nombre:{
        type: String,
        unique: true,
        required:[true,'El nombre es obligatorio']
    },

    password:{
        type: String,
        required:[true, 'La contraseña es obligatoria'],
        minlength: [3, 'Debe tener minimo 3 caracteres']//cantidad minima
    },

    rol:{
        type: String,
        required:true,
        enum: ['admin','usuario']//enumeración varios valores
    },

    estado:{
        type: Boolean,
        default: true,
        required:['El estado es obligatorio']
    }
})

//Esto es un modelo en nodejs

//exportar la funcion  UsuarioSchema
model.exports= model('Usuario',UsuarioSchema)

const {Router} = require('express')
//Desestructuración. Extraer un atributo de un objeto

const route = Router() 

//Importar métodos del controlador
const {usuarioGet, usuarioPost, usuarioPut} = require('../controllers/usuario')

route.get('/', usuarioGet) //Listar Datos

route.post('/', usuarioPost) //Insertar Datos

route.put('/', usuarioPut) //Insertar Datos

module.exports = route