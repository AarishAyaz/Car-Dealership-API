const mongoose = require('mongoose');

const connecttoDB = async ()=>{
    try {
        await mongoose.connect('mongodb+srv://aarishk623_db_user:Aarish@maincluster.k9c0pbk.mongodb.net/')
        console.log("MongoDB is connected Successfully!")
    } catch (error) {
        console.log("Failed to connect to Database",error)
    }
}
module.exports = connecttoDB;