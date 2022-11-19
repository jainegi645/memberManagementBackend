const mongoose = require("mongoose");
const { Schema } = mongoose;

const attendenceSchema = new Schema({
  date: {
    type: Date,
  },
  memberAttendence: [{ _id: Number, name: String, contact:Number, markAs: String }],
});

module.exports = mongoose.model("attendence", attendenceSchema);
