const express = require("express");
const router = express.Router();

const {
  welcome,
  createMember,
  deleteMember,
  getAllMembers,
  updateMember,
} = require("../controllers/memberController");

router.route("/").get(welcome);
router.route("/createMember").post(createMember);
router.route("/deleteMember").post(deleteMember);
router.route("/allMembers").get(getAllMembers);
router.route("/updateMember").post(updateMember);

module.exports = router;
