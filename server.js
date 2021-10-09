const express = require('express');
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(require('./routes/usuario'))

mongoose.connect(process.env.URLDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
},
    (err, resp) => {
        if(err) throw err;
        console.log("Base de datos conectada exitosamente")
}); 

app.listen(3000 () => {
    console.log("Escuchando por el puerto", 3000;
}) 
