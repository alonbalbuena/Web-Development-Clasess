const express = require("express");
const router= express.Router();

router.get("/",routes);

router.get("/hola",(peticion,respuesta)=>{
    respuesta.sendFile(`${__dirname}/../views/index.html`);
});

router.get("/formulario",(peticion,respuesta)=>{
    respuesta.render("formulario");
});

router.get("/formulario/:variable",(peticion,respuesta)=>{
    respuesta.send("formulario con variable : " + peticion.params.variable );
});

//Exportamos la variable router para que cualquiera pueda usar estas rutas en otro archivo
module.exports = router;