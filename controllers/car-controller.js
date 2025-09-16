const { request } = require("express");
const Car = require("../models/car");

//controllers realted to cars

const getAllCars = async (req, res) => {
  try {
    const allCars = await Car.find({});
    if (allCars.length > 0) {
      res.status(200).json({
        success: true,
        message: "Cars list fetched successfully",
        data: allCars,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No cars found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Sometthing Went Wrong, Please try again",
    });
  }
};

const getSingleCarbyID = async (req, res) => {};

const addNewCar = async (req, res) => {
  try {
    const NewCarFormData = req.body;
    const NewCar = await Car.create(NewCarFormData);
    if(NewCarFormData){
        res.status(201).json({
            success:true,
            message:"New Car added Successfully",
            data:NewCar
        })
    }else{
        res.status(404).json({
            success:false,
            message:"Enter details of the car to add it"
        })
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Sometthing Went Wrong, Please try again",
    });
  }
};

const updateCar = async (req, res) => {};

const deleteCar = async (req, res) => {};

module.exports = {
  getAllCars,
  getSingleCarbyID,
  addNewCar,
  updateCar,
  deleteCar,
};
