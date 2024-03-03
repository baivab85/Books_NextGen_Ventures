const books = [
  { title: "Book Design Cover Formula", author: "Stevwn Ray", genre: "Self-help book", pages: 150 },
  { title: "Book Design Cover", author: "Bruce Wayne", genre: "Self-help book", pages: 200 },
  { title: "21st Book Design", author:"Rig Bulle", genre: "Self-help book", pages: 200 },
  { title: "Lion Kings", author: "Bob Tucker", genre: "Fairy Tale", pages: 150 },
  { title: "Godzilla", author: "Roma Bluer", genre: "Science Fiction", pages: 150 },
  { title: "Godzilla Raids Again", author: "Bosh Raj", genre: "Science Fiction", pages: 200 },
  { title: "Godzilla After Shock", author: "Bob Tucker", genre: "Mystery", pages: 250 },
  { title: "The Book of Dragons", author: "Johnatha Shepherd", genre: "Science Fiction", pages: 200 },
  { title: "The Caged Dragon", author: "Dan Michealson", genre: "Historical Fiction", pages: 150 },
  { title: "Planets", author: "Rob Marty", genre: "Mystery", pages: 250 },
  { title: "Federal Tyranny", author: "Mickacho Ros", genre: "Mystery", pages: 250 },
  { title: "The Politics", author: "Aristotle", genre: "Historical Fiction", pages: 150 },
  { title: "Earth School", author: "RashFord Bul", genre: "Mystery", pages: 250 },
  { title: "The Genius Birds ", author: "Jennifer Ackramen", genre: "Historical Fiction", pages: 150 },
  { title: "The Green Mile", author: "Stephan King", genre: "Historical Fiction", pages: 150 },
  { title: "The King", author: "J.R Ward", genre: "Historical Fiction", pages: 150 },
  { title: "The Stephan King IT", author: "Rim Bucker", genre: "Historical Fiction", pages: 150 },
  { title: "Queen Maria", author: "Bect Bellar Zome", genre: "Mystery", pages: 250 },
  { title: "Angel Queen", author: "Umer Corter Disel", genre: "Historical Fiction", pages: 150 },
  { title: "Puppy Health Care", author: "Rimi Gain", genre: "Self Guide", pages: 150 },
];

let currentBookIndex = 0;

function displayBook(index) {
  const book = books[index];
  document.getElementById("title").textContent = book.title;
  document.getElementById("author").textContent = book.author;
  document.getElementById("genre").textContent = book.genre;
  document.getElementById("pages").textContent = book.pages;
  document.getElementById("book-cover").src = `book_cover_${index + 1}.jpg`; // Assuming book_cover_1.jpg, book_cover_2.jpg, etc. are the filenames for book covers
}

function previousBook() {
  currentBookIndex = (currentBookIndex - 1 + books.length) % books.length;
  displayBook(currentBookIndex);
}

function nextBook() {
  currentBookIndex = (currentBookIndex + 1) % books.length;
  displayBook(currentBookIndex);
}

displayBook(currentBookIndex);
