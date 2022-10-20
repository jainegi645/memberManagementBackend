const express = require('express');
require("./config/database").connect();
const cors = require('cors');

const app = express();

//regular middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))


//importing all routes
const member = require('./routes/member');
const attendence = require('./routes/attendence');


//router middleware
app.use('/api/v1',member);
app.use('/api/v1',attendence);


module.exports = app