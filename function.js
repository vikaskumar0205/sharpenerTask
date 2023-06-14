
// Delete Items

itemList.addEventListener('click', (e)=>{
    if(e.target.classList.contains('btn-danger')) {
        e.target.parentElement.remove()
    }
})


// Add Items
// select the submit button
const form = document.getElementById('addForm');

const itemList = document.getElementById('items');
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





