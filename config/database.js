const mongoose = require('mongoose');
const {mongodb_uri} = process.env

exports.connect = async() =>{

await mongoose.connect(mongodb_uri)
.then(console.log('DB connnect succesfully'))
.catch(error => {
    console.log('DB Connection unsuccesfull',error)
    process.exit(1);
})

}