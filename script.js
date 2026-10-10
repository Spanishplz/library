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
    this.read = current;
    this.id = id;
}


let secondBook = {
    name: "How to win friends and influence people",
    author: "Dale Carnegie",
    language: "English",
    pages: 317,
    format: "Kindle",
    currency: "USD",
    price: 9.73,
    read: true,

}

function addBookToLibrary(bookInput) {
    let id = crypto.randomUUID();
    const book = new Book(bookInput.name,
                          bookInput.author,
                          bookInput.language,
                          bookInput.pages,
                          bookInput.format,
                          bookInput.currency,
                          bookInput.price,
                          bookInput.read,
                          id);

    myLibrary.push(book);
}

for(let i = 0; i < 5; i++) {
    addBookToLibrary(secondBook);
}


console.log(myLibrary);

// let firstBook = ["How to win friends and influence people",
//                  "Dale Carnegie",
//                  "English",
//                  317,
//                  "Kindle",
//                  "USD",
//                  9.73,
//                  true];


// const book = new Book(arr[0],
//     arr[1],
//     arr[2],
//     arr[3],
//     arr[4],
//     arr[5],
//     arr[6],
//     arr[7],
//     id);

