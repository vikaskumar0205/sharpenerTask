
const itemList = document.querySelector("#items");

// parentElement
// console.log(itemList.parentElement)
// itemList.parentNode.style.backgroundColor = "black"
// console.log(itemList.parentElement.parentElement)

// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.style.backgroundColor = 'red';
// console.log(itemList.lastElementChild.parentNode)
// itemList.lastElementChild.parentNode.style.fontWeight = "bold";

// lastChild
// console.log(itemList.lastChild) // this will give the text so we cann't use any dom functions
// console.log(itemList.lastChild.textContent) 

// createChild
// const childElement = document.createElement("li");
// childElement.textContent = "Item 5"
// console.log(childElement);
// childElement.className = "list-group-item"; 
// itemList.append(childElement);

// firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.style.backgroundColor = "red";

// firstChild
// console.log(itemList.firstChild); // o/p: #text

// nextSibling
// console.log(itemList.nextSibling);  // o/p: #text

// nextElementSibling
// console.log(itemList.nextElementSibling);

// prevoiusSibling
// console.log(itemList.previousSibling); // text

// previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.backgroundColor = "pink";

// createElement
const div = document.createElement('div');
div.className = "newDiv";
// div.textContent = 'newItem Lister';
div.style.fontSize = "35px";
div.style.fontWeight = "bold";
div.style.backgroundColor="blue";
const conatainer = document.querySelector('header .container');
const h1 = document.querySelector('h1');
conatainer.insertBefore(div, h1);

// setAttribute
div.setAttribute('title', 'hello Div');

// createTextNode
const newDivText = document.createTextNode('Hello buddy');

// appendChild
div.appendChild(newDivText);
