function readingList(books) {
  // Write your code here...
  const content = document.querySelector("#content");
  const createUl = document.createElement("ul");
  const bookListTitle = document.createElement("h1");
  bookListTitle.innerText = "Book List";
  content.append(bookListTitle);

  books.forEach((book) => {
    //create <p>,<img>,<li> elements
    const createP = document.createElement("p");
    const createImg = document.createElement("img");
    const createList = document.createElement("li");

    createP.innerText = `${book.title} - ${book.author}`; // title of book - name of author

    createImg.src = book.image; //search img to the link
    createImg.style.height = "85%"; //<---------add style do resize all the img
    createList.append(createP, createImg);
    createList.className = "styleLi"; //<-------add css style
    //createList.style.backgroundColor = "green"; //<------add background color for all book
    createUl.appendChild(createList);
    if (book.alreadyRead) {
      createList.style.backgroundColor = "green";
    } else {createList.style.backgroundColor = "red";}
  });

  createUl.className = "flexUl"; //<----- add css style for ul, flex display
  //createUl.firstChild.style.backgroundColor = "red"; //<--------add red background for book not read yet
  content.append(createUl);
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

readingList(books);