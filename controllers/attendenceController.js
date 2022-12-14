const Attendence = require("../models/attendence");

exports.markAttendence = async (req, res) => {
  try {
    const { date, memberAttendence } = req.body;
    if (!(date && memberAttendence)) {
      res.status(400).send("All fields are mandatory to fill");
    }

    const existingAttendence = await Attendence.findOne({ date });
    if (existingAttendence) {
      await Attendence.findOneAndUpdate(date, { date, memberAttendence });
      res.status(200).send({
        date,
        memberAttendence,
        message: `Attendence upadted succesfully for ${date}`,
      });
    } else {
      const attendence = await Attendence.create({
        date,
        memberAttendence,
      });

      res
        .status(200)
        .send({ message: `Attendence marked successfully for ${date}` });
    }
  } catch (error) {
    console.log(error);
    res.status(404).send({ message: "Not Found, something went wrong" });
  }
};

exports.getAttendence = async (req, res) => {
  try {
    const { date } = req.body;

    if (date) {
      const attendence = await Attendence.findOne({ date });
      if (attendence) {
        res.status(200).send({
          date: attendence.date,
          memberAttendence: attendence.memberAttendence,
        });
      } else {
        res.status(200).send({ message: "Attendence not found " });
      }
    } else {
      res.status(200).send({ message: "Date is mandatory" });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.getAttendenceByContact = async (req, res) => {
  try {
    const { contact } = req.body;
    if (contact) {
      const allMembers = await Attendence.find({});
      const result = allMembers.filter((elem) =>
        elem.memberAttendence.some((item) => item.contact === contact)
      );
      const dates = result.map((item) => item.date);
      if (dates.length === 0) {
        res.status(200).send({ message: "no record found" });
      }
      res.status(200).send({ dates, count: dates.length });
    } else {
      res.status(200).send({ message: "contact is mandatory" });
    }
  } catch (error) {
    console.log(error);
  }
};
