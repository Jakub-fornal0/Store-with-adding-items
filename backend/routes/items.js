const router = require("express").Router();
const { Item, validate } = require("../models/item");

router.post("/addItem", async (req, res) => {
  console.log("tu bedzie dodawanie");
});

module.exports = router;
