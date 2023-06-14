// let items = document.getElementsByClassName("list-group-item");
// console.log(items);

// items[2].style.backgroundColor = "green";

// so here getElementsByClassName gives the htmlCollection 
// in htmlCollection we don't use the forEach loop only exccesing by the indexes

// for(let i=0;i<items.length;i++) {
//     items[i].style.fontWeight = "bold";
//     items[i].style.backgroundColor = "yellow"
// }

// In the Item 5 doesn't grab the property of items 
// bacause here we select the element by their class name 
// but in the case of Item 5 there is no any class assigned
// that's why it not grabing the property of items.


const li = document.getElementsByTagName("li");
// console.log(li);

for(let i=0;i<li.length;i++) {
    li[i].style.fontWeight = "bold";
    li[i].style.backgroundColor = "red";
}

// In this you can see there is also reflect the property 
// of li's in Item 5.

