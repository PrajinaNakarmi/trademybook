const mongoose = require('mongoose');
const Joi = require('joi');

const userIdType = mongoose.Schema.Types.ObjectId;

const booksSchema = new mongoose.Schema({
    bookTitle:{
        type: String, required: true
    },
    author:{
        type: String
    },
    price:{
        type: Number
    },
    userId: {
        type: userIdType
    },
    description:{
        type: String
    },
    quantity : {
        type: Number, 
        required: true,
        default: 1
    },
    isAvailable :{
        type: Boolean,
        default: true
    },
    images : {
        type: [String],
    },
    comments : {
        type: [{
            commentBy: { 
                type: userIdType
            },
            comment: { 
                type: String 
            },
            date: { 
                type: Date, 
                default: Date.now 
            }
        }],
    }
});



const Book = mongoose.model('Book', booksSchema);

const validate = (data) => {
    const schema = Joi.object({
        bookTitle : Joi.string().required().label('Book Title'),
        author : Joi.string().label('Author'),
        price : Joi.number().min(0).label('Price'),
        description: Joi.string().label('Description'),
        userId: Joi.string().label('User Id'),
        quantity: Joi.number().label('Quantity'),
        isAvailable: Joi.boolean().label('Available'),
        images: Joi.array().items(Joi.string()).label('Images'),
        comments: Joi.array().items(Joi.object({ 
            commentBy: Joi.string().required().label('User Id'), 
            comment: Joi.string().required().label('Comment'), 
            date: Joi.date().label('Date').label('Comments')}))
    });
    return schema.validate(data);
};


module.exports = {Book, validate}