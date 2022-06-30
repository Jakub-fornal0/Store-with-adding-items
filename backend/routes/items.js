const router = require("express").Router();
const { Item, validate } = require("../models/item");
/*const multer = require("multer");
const uuidv4 = require("uuid");
const DIR = "./public/";*/

/*const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    console.log(fileName);
    cb(null, uuidv4() + "-" + fileName);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    console.log("storage1");
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Dopuszczalny format: .png, .jpg i .jpeg."));
    }
  },
});*/

router.post("/addItem", async (req, res) => {
  const datetime = new Date();
  const date = datetime.toISOString().slice(0, 10);
  console.log(req.body);
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });
    await new Item({
      ...req.body,
      image: "image",
      favourite: 0,
      date: date,
      userId: req.user._id,
    }).save();
    res.status(201).send({ message: "Dodano przedmiot." });
  } catch (error) {
    res.status(500).send({ message: "Wewnętrzny błąd serwera" });
  }
});

module.exports = router;
