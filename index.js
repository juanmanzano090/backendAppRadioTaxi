const express = require('express')
var cors = require('cors')
const app = express()
var router = express.Router();
require('dotenv').config()
var bodyParser = require('body-parser')
const mongoose = require('mongoose');

const port = process.env.PORT;
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connect(process.env.DB_SERVER, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("CONECTADO A DB")
});

const usuario = require('./funcionalidad/rutas/usuario');
const egreso = require('./funcionalidad/rutas/egreso');

router.use('/usuario', usuario);
router.use('/egreso', egreso);



router.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(process.env.PREFIJO, router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})