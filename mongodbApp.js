let express=require('express'); //importamos express
const mongoose = require('mongoose'); // importamos mongoose para poder realizar la coneccion con mongodb Atlas

let app=express(); //Definimos una variable para usar express
let port=process.env.PORT || 3000; //verificamos si hay un puerto si no usamos el puerto 3000
require('dotenv').config(); //dotenv permite usar las variables de entorno creados por nosotros


mongoose.connect(process.env.MONGODB).then(()=>console.log("Base en linea")).catch((err)=>console.log(err)); //con la funcion connect de mongoose pegamos nuestra variable de entorno que creamos y si conecta con exito mostramos un mensaje y si no mostramos el error
app.listen(port); // Inicamos el server
