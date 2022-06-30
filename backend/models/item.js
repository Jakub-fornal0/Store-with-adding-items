const mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectID;
const Joi = require("joi");

const itemSchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  price: { type: String, required: true },
  date: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  favourite: { type: String, required: true },
  userId: { type: ObjectId, required: true },
});

const Item = mongoose.model("Item", itemSchema);

const validate = (data) => {
  const schema = Joi.object({
    itemName: Joi.string().required().label("Name").messages({
      "string.empty": `Nazwa jest wymagana.`,
    }),
    price: Joi.string().required().label("Price").messages({
      "string.empty": `Cena jest wymagana.`,
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
