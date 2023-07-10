export const displayAllSections = () => {
  const sections = document.querySelectorAll('section');
  sections.forEach((section) => {
    section.style.display = 'flex';
  });
  if (window.bookLibrary) {
    window.bookLibrary.display();
  }
};

export const displayBookSection = () => {
  const sections = document.querySelectorAll('section');
  sections.forEach((section) => {
    if (section.id === 'book-section') {
      section.style.display = 'flex';
    } else {
      section.style.display = 'none';
    }
  });
  if (window.bookLibrary) {
    window.bookLibrary.display();
  }
};

export const displayNewBooksSection = () => {
  const sections = document.querySelectorAll('section');
  sections.forEach((section) => {
    if (section.id === 'new-books') {
      section.style.display = 'flex';
    } else {
      section.style.display = 'none';
    }
  });
};

export const displayContactSection = () => {
  const sections = document.querySelectorAll('section');
  sections.forEach((section) => {
    if (section.id === 'contact') {
      section.style.display = 'flex';
    } else {
      section.style.display = 'none';
    }
  });
};
