require('dotenv').config(); //O método config serve para nós buscarmos o nosso arquivo dotenv
const express = require('express')
const app = express();
const userRouter = require('./routes/userRouter');
const adminRouter = require('./routes/adminRouter');
const mongoose = require('mongoose');

//Conectando no Banco de Dados no Atlas
mongoose.connect(process.env.MONGO_CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.on("error", () => console.log("Houve um erro"))
mongoose.connection.once("open", () => console.log("Banco carregado"))


app.use('/user', express.json(), userRouter)

app.use('/admin', express.json(), adminRouter)

app.listen(process.env.PORT, () => {
    console.log('Listening on port ' + process.env.PORT);
})