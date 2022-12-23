const express = require("express");
const router = express.Router();

const {
  markAttendence,
  getAttendence,
  getAttendenceByContact,
} = require("../controllers/attendenceController");

router.route("/markAttendence").post(markAttendence);
router.route("/getAttendence").post(getAttendence);
router.route("/getAttendenceByContact").post(getAttendenceByContact);

module.exports = router;
