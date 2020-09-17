
function bookController(Book) {

    function getBooks(req, res) {
        const query = {};
        if (req.query.genre) {
            query.genre = req.query.genre;
        }

        Book.find(query, (err, books) => {
            if (err) {
                console.log(err);
            return res.send(err);
            } else {
                return res.json(books);
            }
        });
    }

    function getBookById(req, res) {
        Book.findById(req.params.bookId, (err, book) => {
            if (err) {
                console.log(err);
                return res.send(err);
            } else {
                return res.json(book);
            }
        });
    }

    function createBook(req, res) {
        const book = new Book(req.body);
        book.save();
        return res.status(201).json(book);
    }

    return {
        getBooks,
        getBookById,
        createBook
    };
}

module.exports = bookController;