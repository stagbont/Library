// Open modal
const addButton = document.querySelector('.add__button'),
      modalContainer = document.querySelector('.modal-container'),
      closeButton = document.querySelector('.close-btn');

addButton.addEventListener('click', () => {
    modalContainer.classList.add('show-modal');
});

// Close modal
closeButton.addEventListener("click", () => {
    modalContainer.classList.remove('show-modal');
})

// Library Functionality

getInputData();

let myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

function addBookToLibrary() {

    const shelves = document.querySelector(".shelves");

    removeAllChildNodes(shelves);
    
    for (let i = 0; i < myLibrary.length; i++) {
        let book = document.createElement('div');
        book.classList = 'book';

        let bookTitle = document.createElement('div');
        bookTitle.className = 'book-title';
        bookTitle.textContent = `${myLibrary[i].title}`;

        let bar = document.createElement('div');
        bar.className = 'bar';

        let bookAuthor = document.createElement('p');
        bookAuthor.className = 'book-author';
        bookAuthor.textContent = `${myLibrary[i].author}`;

        let bookPages = document.createElement('p');
        bookPages.className = 'book-pages';
        bookPages.textContent = `${myLibrary[i].pages} pages`;

        let bookRead = document.createElement('button');
        bookRead.className = 'book-read';
        bookRead.classList.add('book-btn');

        if(myLibrary[i].status == 'on') {
            myLibrary[i].status = 'Read';
        }
        bookRead.textContent = `${myLibrary[i].status}`;

        let bookDelete = document.createElement('button');
        bookDelete.className = 'book-delete';
        bookDelete.classList.add('book-btn');
        bookDelete.textContent = `Delete`

        shelves.appendChild(book);
        book.appendChild(bookTitle);
        book.appendChild(bar);
        book.appendChild(bookAuthor);
        book.appendChild(bookPages);
        book.appendChild(bookRead);
        book.appendChild(bookDelete);
    }
}

function getInputData() {
    const form = document.querySelector(".modal"),
         titleInput = document.querySelector("#book__title"),
         authorInput = document.querySelector("#book__author"),
         pagesInput = document.querySelector("#book__pages"),
         readInput = document.querySelector("#book__read");

    
    form.addEventListener('submit', (e) =>{
        e.preventDefault();

        let title = titleInput.value;
        let author = authorInput.value;
        let pages = pagesInput.value;
        let status = readInput.value;

        let book = new Book(title, author, pages, status);

        myLibrary.push(book);

        addBookToLibrary();
    })
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

