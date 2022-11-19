const express = require("express");
const router = express.Router();

const {
  markAttendence,
  getAttendence,
} = require("../controllers/attendenceController");

router.route("/markAttendence").post(markAttendence);
router.route("/getAttendence").post(getAttendence);

module.exports = router;
