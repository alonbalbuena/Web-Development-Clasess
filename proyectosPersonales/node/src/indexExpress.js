const express = require("express");
const path = require("path");

const app = express();

//settings
app.set("port",80);//asigno puerto
app.set("view engine","jade");//visualizador de platillas
app.set("views", __dirname + "/views");//donde se guardan las plantillas

//middlewares

//routes
app.use(require("./routes/index"));//usamos las rutas creadas en el archivo a parte(importamos el objeto router)


//escuchamos desde el server
app.listen(app.get("port"),()=>{
    console.log("servidor funcionando");  
})