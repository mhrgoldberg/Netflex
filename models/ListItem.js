const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ListItemSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'users'
  },
  movie: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'movies'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = ListItem = mongoose.model('ListItems', ListItemSchema);