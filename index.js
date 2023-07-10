import {
  displayBookSection, displayNewBooksSection, displayContactSection, displayAllSections,
} from './modules/sections.js';
import { BookLibrary } from './modules/book.js';
import { updateDateTime } from './modules/datetime.js';

let bookLibrary;

function initializePage() {
  bookLibrary = new BookLibrary();
  window.bookLibrary = bookLibrary;
}

window.addEventListener('DOMContentLoaded', initializePage);

document.getElementById('addBtn').addEventListener('click', () => {
  if (bookLibrary) {
    bookLibrary.handleClick();
  }
});

document.getElementById('list-link').addEventListener('click', displayBookSection);
document.getElementById('add-link').addEventListener('click', displayNewBooksSection);
document.getElementById('contact-link').addEventListener('click', displayContactSection);
document.getElementById('awesomeBooks').addEventListener('click', displayAllSections);

updateDateTime();
setInterval(updateDateTime, 1000);
