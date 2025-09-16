const express = require('express');
const {getAllCars,getSingleCarbyID,addNewCar,updateCar,deleteCar}= require('../controllers/car-controller')

//create express router
const router = express.Router();

//routes related to Cars
router.get('/get',getAllCars);
router.get('/get/:id',getSingleCarbyID);
router.post('/add',addNewCar);
router.put('/update/:id',updateCar);
router.delete('/delete/:id',deleteCar);

module.exports= router;