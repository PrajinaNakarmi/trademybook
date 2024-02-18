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
            return res.status(404).send({message:'Book not found.'});
        }

		await Book.deleteMany({_id:body.id});

        res.status(201).send({message:'Book removed successfully.'});
    }
    catch(error){
        res.status(500).send({message:'Internal server error'});
    }
})

const validate = (data) => {
	const schema = Joi.object({
        id: Joi.string().required().label("Id")
	});
	return schema.validate(data);
};

module.exports = router;