const router = require("express").Router();
const { Book } = require("../../models/book");
const { User } = require("../../models/user");
const Joi = require("joi");
const strictVerifyToken = require("../../helperFunctions/strictVerification");

router.post("/", strictVerifyToken, async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const book = await Book.findOne({ _id:req.body.id });
    if (!book)
      return res
        .status(401)
        .send({ message: "Cannot find the book." });

    const userId = req.decoded._id; // Extract userId from decoded object
    const editable = JSON.stringify(book.userId) === JSON.stringify(userId);

    const userDetails = await User.findOne({ _id: book.userId });
      
        

    return res.status(200).send({book:{...book._doc, postedBy: userDetails.firstName, editable: editable }});
  } catch (error) {
    console.log("Error",error)
    res.status(500).send({ message: "Internal Server Error",error });
  }
});

const validate = (data) => {
  const schema = Joi.object({
    id: Joi.string().required().label("Book id"),
  });
  return schema.validate(data);
};

module.exports = router;