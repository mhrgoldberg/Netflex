const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MovieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  instructor: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  }, 
  genre: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  videoUrl: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Movie = mongoose.model('movies', MovieSchema);