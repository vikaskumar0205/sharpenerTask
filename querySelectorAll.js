
// querySelectorAll()

const items = document.querySelectorAll("li");
// console.log(items);

// change the font color of the second li item
items[1].style.color = "green";


// select odd li elements and changing their background color
const oddElements = document.querySelectorAll("li:nth-child(odd)");
// console.log(oddElements);
oddElements.forEach(odd=>{
    odd.style.backgroundColor = "green";
})
