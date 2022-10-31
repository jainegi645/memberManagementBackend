const mongoose = require("mongoose");
const { Schema } = mongoose;

const memberSchema = new Schema({
  name: {
    type: String,
    default: null,
  },
  dateofjoining: {
    type: Date,
    default: null,
  },
  contact: {
    type: Number,
    default: null,
  },
  feeStatus: {
    type: String,
    default: "Due",
  },
});
module.exports = mongoose.model("member", memberSchema);
