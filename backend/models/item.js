const mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectID;

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Double, required: true },
  date: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  favourite: { type: Int32, required: true },
  userId: { type: ObjectId, required: true },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = { Item };
