class Project {
  constructor(name) {
    this.name = name;
    this.books = [];
  }
  addBook(bookTitle) {
    this.books.push(bookTitle);
    Project.bookCount++;
  }
  listBooks() {
    this.books.forEach(function (book) {
      let p = document.createElement("p");
      p.innerHTML = book;
      document.querySelector("#data").appendChild(p);
    });
  }
}

let form = document.querySelector("#form1");
form.addEventListener("submit", function (e) {
  let bookTitle = document.querySelector("#name").value;

  let book1 = new Project("Library");
  book1.addBook(bookTitle);
  book1.listBooks();
  e.preventDefault();
});
