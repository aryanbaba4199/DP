import { Schema, models, model } from "mongoose";

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

export default models.Booking || model("Booking", bookingSchema);
