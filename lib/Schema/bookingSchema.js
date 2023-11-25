const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  mobile: String,
  selectedServices: [String],
  selectedFunctionType: String,
  msg: String,
  time: String,
  status: String,
  payment: String,
  expenditures: {
    type: [
      {
        expenditureName: String,
        expenseAmount: String,
      },
    ],
    default: [],
  },
});

module.exports = mongoose.models.Booking || mongoose.model("Booking", bookingSchema);
