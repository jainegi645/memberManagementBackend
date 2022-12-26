const FeeStatus = require("../models/feeStatus");
const Member = require("../models/member");

exports.setFeeStatus = async (req, res) => {
  const {
    name,
    phoneNumber,
    feestatus,
    paidOn,
    totalMonth,
    paidTill,
    givenTo,
  } = req.body;

  if (!(name && phoneNumber && feestatus && paidOn && totalMonth && givenTo)) {
    res.status(400).send("all fields are mandatory to fill");
  }

  //if memner doesnot exists on record
  const memberExists = await Member.findOne({ phoneNumber });
  if (!memberExists) {
    res.status(401).send("member does not exist in record");
  }

  //if fee details already exits.
  const feeRecord = await FeeStatus.create({});
};

exports.TotalFeesPaid = async (req, res) => {
  try {
    const totalMembers = await Member.countDocuments();
    const totalFeesPaid = await Member.find({
      feeStatus: "Paid",
    }).countDocuments();
    res
      .status(200)
      .send({ totalMembers: totalMembers, totalFeesPaid: totalFeesPaid });
  } catch (error) {
    res.status(400).send({ message: "error occured. could not fetch data" });
  }
};
