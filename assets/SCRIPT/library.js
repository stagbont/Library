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

let myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

function addBookToLibrary() {
   
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
    })
}

