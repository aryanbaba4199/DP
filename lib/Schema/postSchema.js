const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    imageUrl: {
        type: String,
        required: true,
      },
      header: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        
      },
})
module.exports = mongoose.models.Post || mongoose.model('Post', postSchema);