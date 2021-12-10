const mongoose = require('mongoose')

const urlDB ='mongodb+srv://mauricio123:1979Mono@cluster0.msw9f.mongodb.net/university_proyect?retryWrites=true&w=majority'
mongoose.connect(urlDB);
const mongoDB = mongoose.connection;
mongoDB.on('open', _ =>{
    console.log("conectado a la bd")
})