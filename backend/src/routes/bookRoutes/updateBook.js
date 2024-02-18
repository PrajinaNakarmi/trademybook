const router = require('express').Router();
const {Book} = require('../../models/book');
const Joi = require("joi");
const strictVerifyToken = require('../../helperFunctions/strictVerification');

router.post('/',strictVerifyToken, async (req, res) => {
    let body = {...req.body}
    try{
        const {error} = validate(body);
        if(error){
            return res.status(400).send(error.details[0].message);
        }

        const userId = req.decoded._id; // Extract userId from decoded object


        const book = await Book.findOne({ userId: userId, _id:body.id });

        if(!book || book.length === 0){
            return res.status(404).send({message:'Book not found. Make sure you are editing the book you posted from this account.'});
        }

        Book.updateOne({ _id: book._id }, { $set: { ...body } })
        .then(result => {res.status(201).send({ message: 'Record updated successfully.', result })})
        .catch(err => {res.status(500).send('Error updating record: ' + err);
    });

    }
    catch(error){
        res.status(500).send({message:'Internal server error'});
    }
})

const validate = (data) => {
	const schema = Joi.object({
        id: Joi.string().required().label("Book id"),
        userId : Joi.string().label('User Id'),
        author : Joi.string().label('Author'),
        bookTitle: Joi.string().label("Book Title"),
        price: Joi.number().min(0).label("Price"),
        description: Joi.string().label('Description'),
        quantity: Joi.number().integer().min(1).label('Quantity'),
        isAvailable: Joi.boolean().label('Available'),
        images: Joi.array().items(Joi.string()).label('Images'),
	});
	return schema.validate(data);
};

module.exports = router;