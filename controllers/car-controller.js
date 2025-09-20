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

const getSingleCarbyID = async (req, res) => {
  try {
    const getCurrentCarid = req.params.id;
    const carDetailsbyId = await Car.findById(getCurrentCarid);
    if(!getCurrentCarid){
      res.status(404).json({
        success:false,
        message: 'Car not found please try again with different id'
      })
      
    }else{
      res.status(200).json({
        success:true,
        message:'Car found successfully!',
        data:carDetailsbyId
      })
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success:false,
      message:'Something went wrong..Please try again!'
    })
  }
};

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

const updateCar = async (req, res) => {
  try {
    const getCurrentcarID = req.params.id;
    const updatedCarFormData = req.body;
    const updatedCar = await Car.findByIdAndUpdate(
      getCurrentcarID,updatedCarFormData,
      {
        new:true
      }
      )
    if(!getCurrentcarID){
      res.status(404).json({
        success:false,
        message:'Book not found try again with different id!'
      })
    }else{
      res.status(200).json({
        success:true,
        message:"Book found and updated successfully",
        data:updatedCar
      })
    }
  } catch (error) {
    console.log(error);
    res.status(500),json({
      success:false,
      message:'Something went wrong Please try again'
    })
  }
};

const deleteCar = async (req, res) => {
  try {
    const getCurrentCarId = req.params.id;
    const deletedCar = await Car.findByIdAndDelete(getCurrentCarId);
    if(!getCurrentCarId){
      res.status(500).json({
        success:false,
        message:'Car Not Found please try again with different id'
      })
    }else{
      res.status(200).json({
        success: true,
        message: ' Book found and deleted successfully!',
        data:deletedCar
      })
    }
  } catch (error) {
     console.log(error);
    res.status(500),json({
      success:false,
      message:'Something went wrong Please try again'
    })
  }
};

module.exports = {
  getAllCars,
  getSingleCarbyID,
  addNewCar,
  updateCar,
  deleteCar,
};
