const express = require('express')
const mongoose = require('mongoose')

const user = require('./routes/user')

const app  = express();
app.use(express.json());
app.use('/api/user', user)

const port = process.env.PORT  || 3010
app.listen(port, ()=>console.log('escucho puerto ' + port));

mongoose.connect("mongodb://localhost/Book",{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
.then( () => console.log ('conectado a la base mongo'))
.catch(error  => console.log('no se conecto a la base'))