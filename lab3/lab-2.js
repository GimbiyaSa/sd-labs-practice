var books = [{title: "The Great Gatsby", author: "F. Scott Fitzgerald", year:"1925"},
            {title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960},
            {title: "1984", author: "George Orwell", year: 1949},
            {title: "We are the world", author: "George Orwell", year: 1949}]

function getBookTitlesByYear(books){
    var booksList = [];
    for(i=0; i<books.length; i++){
        let key = books[i].year;
        for(j=0; j<books.length; j++){
            if(key == books[j].year){
                booksList.push(books[j].title);
            }
        }
        console.log(key + ":" + booksList);
        booksList = [];
    }
        
}

getBookTitlesByYear(books);