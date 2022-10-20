const attendence = require("../models/attendence");
const Attendence = require("../models/attendence");

exports.markAttendence = async (req, res) => {
  try {
    const { date, memberAttendence } = req.body;
    if (!(date && memberAttendence)) {
      res.status(400).send("all fields are mandatory to fill");
    }

    const existingAttendence = await Attendence.findOne({ date });
    if (existingAttendence) {
      await Attendence.findOneAndUpdate(date, { date, memberAttendence });
      res.status(200).send({ date, memberAttendence, message:'attendecne upadted succesfully' });
    } else {
      const attendence = await Attendence.create({
        date,
        memberAttendence,
      });

      res.status(200).send(`attendence marked successfully for ${date}`);
    }
  } catch (error) {
    console.log(error);
  }
};

