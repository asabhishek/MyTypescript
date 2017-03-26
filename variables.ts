function getAllBooks() {
    let books= [
        {title:'book1',author:'ram', available:true},
        {title:'book1',author:'ram', available:true},
        {title:'book1',author:'ram', available:true}
    ];

    return books;
}

function logFirstAvailableBooks(books)
{
    let numberOfBooks = books.length;
 let firstBookAvailable =''
    for(let book of books){
       
        if(book.available){
            firstBookAvailable = book.title;
            break;
        }
    }

    console.log('Total books '+ numberOfBooks);
    console.log('First Available'+ firstBookAvailable);
}

const allBooks = getAllBooks();
logFirstAvailableBooks(allBooks);