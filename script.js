const myLibrary = [];

function Book(title,
              author,
              language,
              pages,
              format,
              currency,
              price,
              current,
              id) {
    this.title = title;
    this.author = author;
    this.language = language;
    this.pages = pages;
    this.format = format;
    this.currency = currency;
    this.price = price;
    this.read = current;
    this.id = id;
}


// let secondBook = {
//     name: "How to win friends and influence people",
//     author: "Dale Carnegie",
//     language: "English",
//     pages: 317,
//     format: "Kindle",
//     currency: "USD",
//     price: 9.73,
//     read: true,

// }

function addBookToLibrary(bookInput) {
    let id = crypto.randomUUID();
    const book = new Book(bookInput.title,
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

let obj = {
    "name": "How to win friends and influence people",
    "author": "Dale Carnegie",
    "language": "English",
    "pages": 317,
    "format": "Kindle",
    "currency": "USD",
    "price": 9.73,
    "read": true,
    "id": "f0886242-5a5b-4c8c-b67c-1c4122fbc989"
}


const addButton = document.querySelector(".add-button");
const textFields = document.querySelectorAll('.input-text');

addButton.addEventListener('click', (e)=> {
    e.preventDefault();
    let newObject = {};
    for (let field of textFields) {
        // console.log(field.value);
        let newProp = field.id.slice(5);
        newObject[newProp] = field.value;
    }

    for (let radio of radioFields) {
        if(radio.checked) {
            // radio.checked.
            newObject.read = radio.value;
        }
    }
    
    console.log(newObject);
    addBookToLibrary(newObject);
    console.log(myLibrary);
    createCards(myLibrary);
})



let counter = 0;
for (let field of textFields) {
    counter++;
    field.value = `number ${counter}`;
}




function falseInputs() {
    let fieldName = "";
    for (let field of textFields) {
        fieldName = field.id.slice(5);
        let inputName = "";
        switch (fieldName) {
            case "title":
                field.value = "How to win friends and influence people";
                break;
            case "author":
                field.value = "Dale Carnegie";
                break;
            case "language":
                field.value = "English";
                break;
            case "pages":
                field.value = 317;
                break;
            case "format":
                field.value = "Kindle";
                break;
        }
    }
}

falseInputs();



const radioFields = document.querySelectorAll(".input-radio");
for (let radio of radioFields) {
    // console.log(radio.value);
}
console.log(radioFields);

const library = document.querySelector(".library");

// function to loop and create cards

function createCards(arr) {
    library.replaceChildren(); // cleans old children
    for(let book of  arr) {
        let card = document.createElement('div');
        card.classList.add("card");
        library.appendChild(card);
        console.log(Object.keys(book).length);
        let bookProperties = Object.keys(book);
        let bookValues = Object.values(book);
        let propertiesNumber = Object.keys(book).length;
        for (let i = 0; i < propertiesNumber ; i++ ) {
            // console.log(bookProperties[i]);
            if (bookValues[i] == undefined) {
                continue;
            }
            let para = document.createElement("p");
            
            if (i == 0) {
                para.classList.add("title");
                let paraText = document.createTextNode(`${bookValues[i]}`);
                
                para.appendChild(paraText);
                card.appendChild(para);
            } else {
                let span = document.createElement("span");
                let paraSpan = document.createTextNode(`${bookProperties[i]}: `);
                let paraText = document.createTextNode(`${bookValues[i]}`);
                span.appendChild(paraSpan);
                para.appendChild(span);
                para.appendChild(paraText);
                card.appendChild(para);
            }
        }
    }
}

