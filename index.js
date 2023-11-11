const express = require("express");
const mysql =require('mysql');

const app = express();

const connection = mysql.createConnection({
    host:'localhost',
    user: 'juan',
    password:'Jeliezer260705#',
    database: "admin" 

});

connection.connect( (err) =>{
    if(err) throw err
    console.log('base de datos conectada')
});


app.set("view engine", "ejs");

app.listen(3200, function(){
    console.log("servidor http://localhost:3200");
});

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/", function(req,res){
    res.render("registro")
});

app.post("/validar",function(req,res){
    const datos= req.body;

    let nom= datos.nom;
    let tel= datos.tel;
    let ced= datos.ced;
    
    let registrar ="INSERT INTO usuarios (nombre, numero, cedula) VALUES('"+nom+"','"+tel+"','"+ced+"')";

    connection.query(registrar,function(error){
        if(error){
            throw error;

        }else{
            console.log('Datos almacenados');
        }
    });


});




//connection.query('SELECT * from usuarios', (err,rows) => {
//    if(err) throw err
//    console.log(`los datos de la tabla usuarios son `)
//    console.log(rows)

//});


//connection.end();



