const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  admin: { type: Boolean, required: true },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "7d",
  });
  return token;
};

const User = mongoose.model("User", userSchema);

const validate = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().required().label("First Name").messages({
      "string.empty": `Imię jest wymagane.`,
    }),
    lastName: Joi.string().required().label("Last Name").messages({
      "string.empty": `Nazwisko jest wymagane.`,
    }),
    password: passwordComplexity().required().label("Password").messages({
      "string.empty": `Hasło jest wymagane.`,
    }),
    email: Joi.string().email().required().label("Email").messages({
      "string.empty": `Email jest wymagany.`,
    }),
  });
  return schema.validate(data);
};

module.exports = { User, validate };
