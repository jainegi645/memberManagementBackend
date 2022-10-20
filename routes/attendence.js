const express = require('express');
const router = express.Router();


const {markAttendence} = require('../controllers/attendenceController');

router.route('/markAttendence').post(markAttendence);

module.exports = router;