const mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectID;
const Joi = require("joi");

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

const validate = (data) => {
  const schema = Joi.object({
    name: Joi.string().required().label("Name").messages({
      "string.empty": `Nazwa jest wymagana.`,
    }),
    price: Joi.Double().required().label("Price").messages({
      "string.empty": `Cena jest wymagana.`,
    }),
    date: Joi.string().required().label("Date").messages({
      "string.empty": `Data jest wymagana.`,
    }),
    description: Joi.string().required().label("Description").messages({
      "string.empty": `Opis jest wymagany.`,
    }),
    category: Joi.string().required().label("Category").messages({
      "string.empty": `Kategoria jest wymagana.`,
    }),
    image: Joi.string().required().label("Image").messages({
      "string.empty": `Zdjęcie jest wymagane.`,
    }),
  });
  return schema.validate(data);
};

module.exports = { Item, validate };
