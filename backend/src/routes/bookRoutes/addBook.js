const router = require('express').Router();
const {Book, validate} = require('../../models/book');
const strictVerifyToken = require('../../helperFunctions/strictVerification');

router.post('/',strictVerifyToken, async (req, res) => {
    let body = {...req.body}
    try{
        const {error} = validate(body);
        if(error){
            console.log(error);
            return res.status(400).send(error.details[0].message);
        }

        const userId = req.decoded._id;

        const book = await Book.findOne({ bookTitle: body.bookTitle });

        if(book && book.bookTitle === body.bookTitle && JSON.stringify(book.userId) === JSON.stringify(userId)  && book.price === body.price){
            return res.status(404).send({message:'Book already exists with all the matching constraints. Please edit the quantity of existing book.'});
        }

        const data = await new Book({...body, userId: userId}).save();
        res.status(201).send({message:'Book is added successfully.', data: data});
    }
    catch(error){
        
        res.status(500).send({message:'Internal server error'});
    }
})

module.exports = router;