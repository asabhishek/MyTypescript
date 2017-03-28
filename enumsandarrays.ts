function getBooks() {
    let books= [
        {title:'book1',author:'ram', available:true, category:Category.Biography},
        {title:'book1',author:'ram', available:true, category:Category.Fiction},
        {title:'book1',author:'ram', available:true, category:Category.Children}
    ];

    return books;
}

function logTopAvailableBooks(books): void
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

function getBookTitleByCategory(categoryfilter:Category):Array<string>{
    console.log('Getting books in category' + categoryfilter);

    const allBooks = getBooks();
    const filteredTitle:string[] = [];

    for(let currentBook of allBooks){
        if(currentBook.category === categoryfilter){
            filteredTitle.push(currentBook.title);
        }

        return filteredTitle;
    }
}

function logBookTitles(titles:string[]): void{
    for(let title of titles){
        console.log(title);
    }
}
enum Category{Biography, Fiction,Poetry,History,Children}
const poetryBooks = getBookTitleByCategory(Category.Fiction);
logBookTitles(poetryBooks);

