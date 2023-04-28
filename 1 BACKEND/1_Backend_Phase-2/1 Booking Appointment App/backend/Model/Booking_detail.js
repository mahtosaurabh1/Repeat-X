const mongoose = require("mongoose");

const BookingDetailSchema = new mongoose.Schema({
  name: String,
  phoneNo: Number,
  email: String,
});

module.exports = mongoose.model("details", BookingDetailSchema); // yaha par products collection ka name hai
