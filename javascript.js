const books = document.querySelector('.books');
const form = document.querySelector(".add-form");
const addButton = document.querySelector(".add-button");
const resetButton = document.querySelector(".reset-button");

let myLibrary = []; //empty array for saving book data

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBooks();
}

//loop array and display each book
function displayBooks() {
    books.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        //create book card
        const card = document.createElement('div');
        card.classList.add('card');
        books.appendChild(card);

        //append book infos
        const title = document.createElement('p');
        const author = document.createElement('p');
        const pages = document.createElement('p');

        title.innerHTML  = `<b>Title:</b> ` + myLibrary[i].title;
        author.innerHTML  = `<b>Author:</b> ` + myLibrary[i].author;
        pages.innerHTML  = `<b>Pages:</b> ` + myLibrary[i].pages;

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);

        //read toggle button
        const read = document.createElement("button");
        read.classList.add('read-button');
        read.textContent = myLibrary[i].read ? "Read" : "Not Read";
        card.appendChild(read);

        if (myLibrary[i].read){
            read.style.backgroundColor = "#ADDFB3";
            read.style.color = "#000000";
            read.style.fontWeight = "bold";
        } else {
            read.style.backgroundColor = "#CB4154";
            read.style.color = "#ffffff";
            read.style.fontWeight = "bold";
        }

        read.addEventListener("click", (e) => {
            if (read.textContent == "Not Read") {
                read.style.backgroundColor = "#ADDFB3";
                read.style.color = "#000000";
                read.style.fontWeight = "bold";
                read.textContent = "Read";
                myLibrary[i].read = true;
            } else {
                read.style.backgroundColor = "#CB4154";
                read.style.color = "#ffffff";
                read.style.fontWeight = "bold";
                read.textContent = "Not Read";
                myLibrary[i].read = false;
            }
        })

        //remove button
        const removeBook = document.createElement("button");
        removeBook.classList.add('remove-button');
        removeBook.textContent = 'Remove';
        card.appendChild(removeBook);
        removeBook.dataset.rowNumber = [i];

        removeBook.addEventListener('click', (e) => {
            myLibrary.splice(e.target.dataset.rowNumber,1)
            displayBooks();
        })

        //check array count
        console.log(myLibrary);
    }
}

//function in adding books
function newBooksData() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;

    if ((title == "") || (author == "") || (pages == "")) {
        return;
    } 

    addBookToLibrary(title, author, pages, read);
    form.reset();
}

//function to clear form
function clearForm() {
    document.querySelector(".add-form").reset();
}

//DOM for add button
addButton.addEventListener('click', (e) => {
    newBooksData();
});

//DOM for reset button
resetButton.addEventListener("click", (e) => {
    clearForm();
});


//form validation
const formValidation = (() => {
    const formTitle = document.getElementById("title");

    formTitle.addEventListener("input", () => {
        if (formTitle.value === ""){
            formTitle.setCustomValidity("Title should not be blank!");
        } else {
            formTitle.setCustomValidity("");
        }
    });

    const formAuthor = document.getElementById("author");

    formAuthor.addEventListener("input", () => {
        if (formAuthor.value === ""){
            formAuthor.setCustomValidity("Author should not be blank!");
        } else {
            formAuthor.setCustomValidity("");
        }
    });
})();

//pre-defined books
addBookToLibrary('Illuminae', 'Amie Kaufman & Jay Kristoff', '624', true);
addBookToLibrary('Ready Player One', 'Ernest Cline', '386', true);
addBookToLibrary('The Hate U Give', 'Angie Thomas', '454', false);
addBookToLibrary('Where the Crawdads Sing', 'Delia Owens', '384', false);