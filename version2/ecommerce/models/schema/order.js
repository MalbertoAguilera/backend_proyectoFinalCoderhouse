const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" ,required:true},
  email:{type: String, required:true},
  cart: { type: Object, required: true },
  cartToArray: { type: Object }
});

module.exports = mongoose.model("Order", schema);
