const mongoose = require('mongoose');
 
module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    try{
        mongoose.connect("mongodb+srv://admin:praj12345ina@cluster0.v4qvwmr.mongodb.net/?retryWrites=true&w=majority", connectionParams);
        console.log('Connected to database...')
    }catch(error){
        console.log('Could not connect to database...',error)
    }
}