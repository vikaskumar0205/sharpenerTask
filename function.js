const itemList = document.getElementById('items');
// Delete Items

itemList.addEventListener('click', (e)=>{
    if(e.target.classList.contains('btn-danger')) {
        e.target.parentElement.remove()
    }
})


// Add Items
// select the submit button
const form = document.getElementById('addForm');


// console.log(ul);

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    const text = document.getElementById('item').value;
    
    // create a new li item
    const newli = document.createElement("li");
    newli.className = "list-group-item";
    newli.textContent = text;

    // create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.className = "btn btn-danger btn-sm float-right delete";
    deleteButton.textContent = "X";

    // append the delete button
    newli.appendChild(deleteButton);

    // append the newli
    itemList.appendChild(newli);
    
    
});


// filter Items

const filter = document.getElementById('filter');
// console.log(filter);

// keyup event
filter.addEventListener('keyup', e=>{
    // console.log(e.target.value);
    setTimeout(()=>{
        const text = e.target.value.toLowerCase();
        const items = itemList.getElementsByTagName('li');
        Array.from(items).forEach(ele=>{
            const itemsName = ele.firstChild.textContent;
            let index = itemsName.toLowerCase().indexOf(text);
            // console.log(index);
            if(index !== -1) {
                ele.style.display = 'block';
            }
            else {
                ele.style.display = 'none';
            }
        })
    }, 2000);
});


