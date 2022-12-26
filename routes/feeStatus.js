const express = require("express");
const router = express.Router();

const { TotalFeesPaid } = require("../controllers/feeStatusController");

router.route("/totalFeesPaid").get(TotalFeesPaid);


module.exports = router;
