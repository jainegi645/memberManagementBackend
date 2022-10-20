const mongoose = require('mongoose');
const {Schema}=mongoose;

const feestatusSchema = new Schema({
    name:{
        type:String
    },
    phoneNumber:{
        type:Number
    },
    feeStatus:{
        type:String
    },
    paidOn:{
        type:Date
    },
    totalMonth:{
        type:Number,
        default:1
    },
    paidTill:{
        type:Date
    },
    givenTo:{
        type:String
    }


})
module.exports = mongoose.model('feesStatus',feestatusSchema)