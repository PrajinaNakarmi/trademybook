require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const connection = require('./db');

const registerRoutes = require('./routes/authentication/register');
const loginRoutes = require('./routes/authentication/login');
const addBookRoutes = require('./routes/bookRoutes/addBook');
const deleteBookRoutes = require('./routes/bookRoutes/deleteBook');
const updateBookRoutes = require('./routes/bookRoutes/updateBook');
const booksRoutes = require('./routes/bookRoutes/getBooks');
const bookRoutes = require('./routes/bookRoutes/getBookDetail');

connection();

const app = express();

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

//middlewares
app.use(express.json());
app.use(cors(corsOptions));
app.use(helmet());

//routes
app.use('/api/register', registerRoutes);
app.use('/api/login', loginRoutes);
app.use('/api/book/add', addBookRoutes);
app.use('/api/book/delete', deleteBookRoutes);
app.use('/api/book/update', updateBookRoutes);
app.use('/api/books', booksRoutes);
app.use('/api/book', bookRoutes);

app.listen(3000, () => {
    console.log('listening on port 3000');
})