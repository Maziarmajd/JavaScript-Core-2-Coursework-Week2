function shoppingList(arrayOfShoppingList) {
  // Write your code here...
    const content = document.querySelector("#content"); //<------- target the div element to assign ul
    const createUl = document.createElement("ul"); //<----------- create <ul></ul>
    arrayOfShoppingList.forEach((product) => {
    const createList = document.createElement("li"); //<---------- create list
    createList.innerText = product;
    createUl.appendChild(createList); //<------------ child element in ul
  });

  content.append(createUl);
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
