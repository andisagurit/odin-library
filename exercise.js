class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    info() {
        return this.title + ' by ' + this.author + ', '+ this.pages + ' pages, ' + this.read + '.';
    }
}

let theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
let pridePrejudice = new Book('Pride and Prejudice', 'Jane Austen', 279, 'read');

console.log(theHobbit.info());
console.log(pridePrejudice.info());