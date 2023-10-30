const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    name : String,
    email : String,
    rating : Number,
    feedback : String
});
module.exports = mongoose.models.Feedback || mongoose.model('Feedback', feedbackSchema);