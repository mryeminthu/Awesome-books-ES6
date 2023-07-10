/* eslint-disable max-classes-per-file */

import { Storage } from './storage.js';

export class BookEntry {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

export class BookLibrary {
  constructor() {
    this.titleInput = document.getElementById('title');
    this.authorInput = document.getElementById('author');
    this.addBtn = document.getElementById('addBtn');
    this.output = document.getElementById('output');
    this.errorMsg = document.getElementById('error-msg');
    this.books = Storage.loadData('books') || [];

    this.display();
    this.addBtn.addEventListener('click', this.handleClick.bind(this));
  }

  display() {
    this.output.innerHTML = '';

    if (this.books.length === 0) {
      const messageElement = document.createElement('p');
      messageElement.textContent = 'No book has been added yet.';
      messageElement.classList.add('no-books');
      this.output.appendChild(messageElement);
    } else {
      this.books.forEach((book, index) => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book-entry');
        bookElement.innerHTML = `
          "${book.title}" by ${book.author}
          <button class="remove-button" data-index="${index}">Remove</button>`;
        bookElement.style.backgroundColor = index % 2 === 0 ? '#dfd8ab' : '#e9f1de';
        this.output.appendChild(bookElement);
      });
    }

    if (Object.keys(this.books).length === 0) {
      this.output.classList.remove('container');
    } else {
      this.output.classList.add('container');
    }

    const removeButtons = this.output.getElementsByClassName('remove-button');
    Array.from(removeButtons).forEach((button) => {
      button.addEventListener('click', this.handleRemove.bind(this));
    });
  }

  handleClick(event) {
    event.preventDefault();
    const titleValue = this.titleInput.value;
    const authorValue = this.authorInput.value;
    if (titleValue && authorValue) {
      const book = new BookEntry(titleValue, authorValue);
      this.books.push(book);
      Storage.saveData('books', this.books);
      this.display();
      this.titleInput.value = '';
      this.authorInput.value = '';
      this.errorMsg.textContent = '';
    } else {
      this.errorMsg.textContent = 'Please make sure to fill both the title and author.';
    }
  }

  handleRemove(event) {
    const { index } = event.target.dataset;
    this.books.splice(index, 1);
    Storage.saveData('books', this.books);
    this.display();
  }
}
