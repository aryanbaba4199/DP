import mongoose from "mongoose";

const emiUserSchema = new mongoose.Schema({
    name: String,
    gender: String,
    dob: Date,
    mobile: String,
    email: String,
    empl: String,
    sallary: Number,
    amount: Number,
    city: String,
    country: String,
    state: String,
    pin: Number,
    pan: String,
    aadhar: Number
});

module.exports = mongoose.models.EmiUser || mongoose.model('EmiUser', emiUserSchema);
