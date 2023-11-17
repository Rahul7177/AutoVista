const mongoose = require("mongoose");

const CarSchema = mongoose.Schema({
  Name: String,
  Type: String,
  Make: String,
  Price: Number,
  Image: String,
  Desc:String,
});

module.exports = mongoose.model("Cars", CarSchema);