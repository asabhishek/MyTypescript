function getBooks() {
    var books = [
        { title: 'book1', author: 'ram', available: true, category: Category.Biography },
        { title: 'book1', author: 'ram', available: true, category: Category.Fiction },
        { title: 'book1', author: 'ram', available: true, category: Category.Children }
    ];
    return books;
}
function logTopAvailableBooks(books) {
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
function getBookTitleByCategory(categoryfilter) {
    console.log('Getting books in category' + categoryfilter);
    var allBooks = getBooks();
    var filteredTitle = [];
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var currentBook = allBooks_1[_i];
        if (currentBook.category === categoryfilter) {
            filteredTitle.push(currentBook.title);
        }
        return filteredTitle;
    }
}
function logBookTitles(titles) {
    for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
        var title = titles_1[_i];
        console.log(title);
    }
}
var Category;
(function (Category) {
    Category[Category["Biography"] = 0] = "Biography";
    Category[Category["Fiction"] = 1] = "Fiction";
    Category[Category["Poetry"] = 2] = "Poetry";
    Category[Category["History"] = 3] = "History";
    Category[Category["Children"] = 4] = "Children";
})(Category || (Category = {}));
var poetryBooks = getBookTitleByCategory(Category.Fiction);
logBookTitles(poetryBooks);
//# sourceMappingURL=enumsandarrays.js.map