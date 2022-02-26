const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    Bookid: String,
    name: String,
    introduction: String,
    author: String,
    author_biography: String,
    publish_year: Number,
    status: String
})

const Book = new mongoose.model('book', bookSchema)
module.exports = Book