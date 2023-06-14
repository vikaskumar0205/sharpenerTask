let items = document.getElementsByClassName("list-group-item");
// console.log(items);

items[2].style.backgroundColor = "green";

// so here getElementsByClassName gives the htmlCollection 
// in htmlCollection we don't use the forEach loop only exccesing by the indexes

for(let i=0;i<items.length;i++) {
    items[i].style.fontWeight = "bold";
}
