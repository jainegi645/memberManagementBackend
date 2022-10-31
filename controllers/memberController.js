const Member = require("../models/member");

exports.welcome = (req, res) => {
  res.status(200).send("welcome to new backend");
};

//to create a member
exports.createMember = async (req, res) => {
  try {
    const { name, dateofjoining, contact, feeStatus } = req.body;
    //retriving data from body
    if (!(name && contact && feeStatus && dateofjoining)) {
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
        feeStatus,
      });

      //sending response back
      res.status(200).send("member added succesfully");
      // res.send(member);
    }
  } catch (error) {
    console.log(error);
  }
};

// to delete a member

exports.deleteMember = async (req, res) => {
  try {
    const { contact } = req.body;

    //retriving data from body
    if (!contact) {
      res.status(400).send("require contact to delete member");
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

// to get all member
exports.getAllMembers = async (req, res) => {
  try {
    const allMembers = await Member.find({});
    res.status(200).send(allMembers);
  } catch (error) {
    console.log(error);
  }
};

exports.updateMember = async (req, res) => {
  try {
    const { name, contact, feeStatus, dateofjoining } = req.body;
    if (!name) {
      const filter = { contact };
      const update = { feeStatus, dateofjoining };
      const updateMember = await Member.findOneAndUpdate(filter, update);
      res.status(200).send("member updated succesfully");
    } else if (!feeStatus) {
      const filter = { contact };
      const update = { name, dateofjoining };
      const updateMember = await Member.findOneAndUpdate(filter, update);
      res.status(200).send("member updated succesfully");
    } else if (!dateofjoining) {
      const filter = { contact };
      const update = { name, feeStatus };
      const updateMember = await Member.findOneAndUpdate(filter, update);
      res.status(200).send("member updated succesfully");
    } else {
      const filter = { contact };
      const update = { name, feeStatus, dateofjoining };
      const updateMember = await Member.findOneAndUpdate(filter, update);
      res.status(200).send("member updated succesfully");
    }
  } catch (error) {
    console.log(error);
  }
};
