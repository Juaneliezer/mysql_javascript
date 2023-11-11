const express = require("express");
const mysql =require('mysql');

const app =express();

const connection = mysql.createConnection({
    host:'localhost',
    user: 'juan',
    password:'Jeliezer260705#',
    database: "admin" 

});

app.set("view engine", "ejs");

app.listen(8000, function(){
    console.log("servidor https://localhost:8000");
});

app.use(express.json);
app.use(express.urlencoded({extended:false}));

app.get("/", function(req,res){
    res.render("registro")
});

app.post("/validar",function(req,res){
    const datos= req.body;

    let nom= datos.nom;
    let num= datos.num;
    let ced= datos.ced;
    
    let registrar ="INSERT INTO usuarios (nombre, numero, cedula) VALUES('"+nom+"','"+num+"','"+ced+"')";

    connection.query(registrar,function(error){
        if(error){
            throw error;

        }else{
            console.log('Datos almacenados')
        }
    });


});


connection.connect( (err) =>{
    if(err) throw err
    console.log('base de datos conectada')
});




//connection.query('SELECT * from usuarios', (err,rows) => {
//    if(err) throw err
//    console.log(`los datos de la tabla usuarios son `)
//    console.log(rows)

//});


//connection.end();



