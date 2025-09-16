require('dotenv').config()
const express = require('express');
const connecttoDB = require('./database/db')
const carRoutes = require('./routes/car-route')

const app = express();
const PORT = process.env.PORT || 3000;

//connecting to DB
connecttoDB();

//middleware
app.use(express.json());

//Car routes
app.use('/api/cars',carRoutes)


//PORT Connection
app.listen(PORT,()=>{
    console.log(`Server is listening on Port ${PORT}`)
})