const router = require("express").Router();
const { Book } = require("../../models/book");
const VerifyToken = require('../../helperFunctions/verifyToken');

router.get("/", VerifyToken, async (req, res) => {
	try {
	const books = await Book.find({}, { email: 0, userId: 0,comments:0 });
	if (books.length === 0) {
	return res.status(401).send({ message: "Sorry no any available books at the moment. " });
	}
	if (req.authenticated) {
	return res.status(200).send(books);
	} else {
	const booksWithoutSensitiveInfo = await Book.find({}, {  description: 0, email: 0, userId: 0,comments:0  });
	return res.status(200).send(booksWithoutSensitiveInfo );
	}
	} catch (error) {
	res.status(500).send({ message: "Internal Server Error" });
	}
	});

module.exports = router;