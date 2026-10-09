const myLibrary = [];

function Book(name,
              author,
              language,
              pages,
              format,
              currency,
              price,
              current,
              id) {
    this.name = name;
    this.author = author;
    this.language = language;
    this.pages = pages;
    this.format = format;
    this.currency = currency;
    this.price = price;
    this.currentPage = current;
    this.id = id;
}

let firstBook = ["How to win friends and influence people",
                 "Dale Carnegie",
                 "English",
                 317,
                 "Kindle",
                 "USD",
                 9.73,
                 25];

function addBookToLibrary(arr) {
    //loop the array of books 
    let id = crypto.randomUUID();
    const book = new Book(arr[0],
                          arr[1],
                          arr[2],
                          arr[3],
                          arr[4],
                          arr[5],
                          arr[6],
                          arr[7],
                          id);

    myLibrary.push(book);
}

for(let i = 0; i < 5; i++) {
    addBookToLibrary(firstBook);
}


console.log(myLibrary);



