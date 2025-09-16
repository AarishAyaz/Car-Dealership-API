const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    Make:{
        type:String,
        required:[true,"Car Make is required"],
        maxLength:[100,'Car Make cannot be more than 100 characters']
    },
    Manufactured:{
        type:Number,
        required:[true,'Manufactured year is required'],
        maxLength:[4,'Manufactured year should contain 4 numbers']
    },
    Color:{
        type: String,
        required:[true,'Color is required'],
        maxLength:[20,'Color cannot be more than twenty letters']
    },
    Price:{
        type:Number,
        required:[true,'Price is required'],
        maxLength:[50,'Cannot be more than fifty digits']
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})
module.exports = mongoose.model('Car',carSchema);