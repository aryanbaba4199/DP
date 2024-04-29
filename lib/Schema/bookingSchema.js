import { Schema, models, model } from "mongoose";
import mongoose from "mongoose";

const bookingSchema = new Schema({
  name: String,
  email: String,
  address: String,
  mobile: String,
  selectedServices: [String],
  selectedFunctionType: String,
  msg: String,
  time: String,
  status: String,
  pid: String,
  budget : Number,
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

module.exports = mongoose.models.Booking || mongoose.model('Booking', bookingSchema);
