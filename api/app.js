require("dotenv").config();

const express = require("express");
const cors = require("cors");
const dbConnect = require('./config/mongo');
const app = express();

app.use(cors());

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
// Rutas

app.use('/api', require('./routes'));


const port = process.env.PORT || 8000;

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})

dbConnect();