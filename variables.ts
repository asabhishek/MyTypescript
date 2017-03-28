function getAllBooks() {
    let books= [
        {title:'book1',author:'ram', available:true},
        {title:'book1',author:'ram', available:true},
        {title:'book1',author:'ram', available:true}
    ];

    return books;
}

function logFirstAvailableBooks(books): void
{
    let numberOfBooks: number = books.length;
 let firstBookAvailable: string =''
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