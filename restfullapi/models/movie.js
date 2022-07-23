const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  tittle:String,
  year:Number,
  score:Number,
  rating:String
});
module.exports= mongoose.model('Movie',movieSchema);