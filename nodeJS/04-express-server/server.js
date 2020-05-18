const express = require("express");
const path = require("path");
const mysql = require("mysql");

const app = express();

app.use(express.static(__dirname + "/public"));
const initPage = path.join(__dirname + "/public/home.html");

//API REST
app.get("/home", (req,res) => {
  res.sendFile(initPage);
});

app.get("/usuario/:id", (req,res) => {
  var conexion = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Hacendado15*",
    database:"node",
    port:3306
  })

  conexion.connect((err)=>{if(err)throw err});

  var query = conexion.query("SELECT * FROM usuarios",(err,data)=>{
    if(err) throw err;
    else{
      if (data.length > 0) res.statusCode(200).json("hay datos");
      else res.statusCode(400).json("no hay datos");
    }
  });

  conexion.end();
});

const server = app.listen(8888, () => {
  console.log("Servidor web iniciado");
});