const express = require('express');
const bookController = require('../controller/bookController');

function routes(Book) {
    const bookRouter = express.Router();
    const { getBooks, getBookById, createBook } = bookController(Book)

    bookRouter.route('/books')
        .post(createBook)
        .get(getBooks);

    bookRouter.route('/books/:bookId')
        .get(getBookById);

    return bookRouter;
}

module.exports = routes;