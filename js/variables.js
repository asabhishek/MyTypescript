function getAllBooks() {
    var books = [
        { title: 'book1', author: 'ram', available: true },
        { title: 'book1', author: 'ram', available: true },
        { title: 'book1', author: 'ram', available: true }
    ];
    return books;
}
function logFirstAvailableBooks(books) {
    var numberOfBooks = books.length;
    var firstBookAvailable = '';
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var book = books_1[_i];
        if (book.available) {
            firstBookAvailable = book.title;
            break;
        }
    }
    console.log('Total books ' + numberOfBooks);
    console.log('First Available' + firstBookAvailable);
}
var allBooks = getAllBooks();
logFirstAvailableBooks(allBooks);
//# sourceMappingURL=variables.js.map