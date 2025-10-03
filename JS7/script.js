class Book {
  constructor(title, author, category) {
    this.title = title;
    this.author = author;
    this.category = category;
  }
}

// Exercise 02:
class Library {
  constructor() {
    this.books = [];
  }

  addBookToLibraryAndDisplay(book) {
    this.books.push(book);
    this.displayBooks();
  }

  displayBooks() {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = ""; // Clear the list

    const books = this.books;
    for (let i = 0; i < books.length; i++) {
      const book = books[i]; // Access the current book in the array
      const bookDiv = document.createElement("div");
      bookDiv.className = "alert alert-secondary mt-2";
      bookDiv.textContent = `${book.title} by ${book.author} - Category: ${book.category}`;
      bookList.appendChild(bookDiv);
    }
  }

  displayFilteredBooks(filteredBooks) {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = ""; // Clear the list
    for (let i = 0; i < filteredBooks.length; i++) {
      const book = filteredBooks[i]; // Access the current book in the array
      const bookDiv = document.createElement("div");
      bookDiv.className = "alert alert-secondary mt-2";
      bookDiv.textContent = `${book.title} by ${book.author} - Category: ${book.category}`;
      bookList.appendChild(bookDiv);
    }
  }
}

const library = new Library();

function addBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const category = document.getElementById("category").value;

  const book = new Book(title, author, category);
  library.addBookToLibraryAndDisplay(book);
}

function filterBooks() {
  const category = document.getElementById("filterCategory").value;
  library.filterBooksByCategory(category);
}

//Exercise 03:
// Extend the Library class with a filter method
Library.prototype.filterBooksByCategory = function (category) {
  const filteredBooks = this.books.filter(
    (book) => book.category.toLowerCase() === category.toLowerCase()
  );
  this.displayFilteredBooks(filteredBooks);
};

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("addBookBtn").addEventListener("click", addBook);
  document
    .getElementById("filterBooksBtn")
    .addEventListener("click", filterBooks);
});
