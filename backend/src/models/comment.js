const mongoose = require('mongoose');

const Joi = require('joi');

const commentSchema = new mongoose.Schema({
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
});
const Comment = mongoose.model('Comment', commentSchema);

const validate = (data) => {
    const schema = Joi.object({
            commentBy: Joi.string().required().label('User Id'), 
            comment: Joi.string().required().label('Comment'), 
            date: Joi.date().label('Date').label('Comments')
    });
    return schema.validate(data);
};


module.exports = {Comment, validate}