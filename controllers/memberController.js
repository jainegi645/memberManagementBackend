const Member = require("../models/Member");

exports.welcome = (req, res) => {
  res.status(200).send("welcome to new backend");
};

//! to create a member
exports.createMember = async (req, res) => {
  try {
    const { name, dateofjoining, contact, feestatus } = req.body;

    //retriving data from body
    if (!(name && contact && feestatus && dateofjoining)) {
      res.status(400).send("all fields are mandatory");
    }

    //if member already exists
    const memberExists = await Member.findOne({ contact: contact }); // ! maybe it just check that a value with contact exists, it should be contact === contact?
    if (memberExists) {
      res.status(401).send("user already exist with this contact");
    } else {
      //creating a member
      const member = await Member.create({
        name,
        dateofjoining,
        contact,
        feestatus,
      });

      //sending response back
      res.status(200).send("member added succesfully");
    }
  } catch (error) {
    console.log(error);
  }
};

//! to delete a member

exports.deleteMember = async (req, res) => {
  try {
    const { name, contact } = req.body;

    //retriving data from body
    if (!(name && contact)) {
      res.status(400).send("require name and contact to delete member");
    }

    const memberExists = await Member.findOne({ contact });
    if (memberExists) {
      await Member.deleteOne({ contact });
      res.status(200).send("Member Successfully Deleted");
    } else {
      res.status(400).send("Member doesnot exists");
    }
  } catch (error) {
    console.log(error);
  }
};

//! to get all member
exports.getAllMembers = async (req, res) => {
  try {
    const allMembers = await Member.find({});
    res.status(200).send(allMembers);
  } catch (error) {
    console.log(error);
  }
};

exports.example = async (req, res) => {
  try {
    res.status(200).send("example");
  } catch (error) {
    console.log(error);
  }
};
