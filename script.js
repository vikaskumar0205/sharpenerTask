

const url = 'https://crudcrud.com/api/6d227778b4e641bcb0eac04ab2a6437d/dataCollectionNew';

const submitBtn = document.getElementById("submit-button");

submitBtn.addEventListener("click", handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();

  const inputItems = document.querySelectorAll('input[type="text"]');
  const obj = {};

  inputItems.forEach(({ name, value }) => {
    obj[name] = value;
  });

  axios
    .post(url, obj)
    .then((response) => {
      createListItem(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

  inputItems.forEach((item) => {
    item.value = "";
  });
}

function createListItem(item) {
  const listItems = document.getElementById("div-items");

  // creation of li element;
  const li = document.createElement("li");
  li.className = "form-group mb-2";
  li.setAttribute("id", item._id);
  li.textContent = `${item.name} - ${item.email} - ${item.phone}`;
  
  // delete button
  const delButton = document.createElement("input");
  delButton.type = "submit";
  delButton.value = "delete";
  delButton.className = "btn btn-dark p-1 delete";
  delButton.addEventListener("click", handleDeleteButtonClick);
  
  // edit button
  const editButton = document.createElement("input");
  editButton.type = "submit";
  editButton.value = "edit";
  editButton.className = "btn btn-dark p-1 mx-2 edit";
  editButton.addEventListener("click", handleEditButtonClick);

  // append the delete and edit button into li.
  li.appendChild(delButton);
  li.appendChild(editButton);
  listItems.appendChild(li);
}

// delete button functionality
function handleDeleteButtonClick(e) {
    const itemList = e.target.parentElement;
    
    // getting id
    const itemId = itemList.getAttribute('id');
    itemList.remove();
    axios.delete(`${url}/${itemId}`)
        .then(()=> console.log(""))
        .catch(err=>console.log(err));
}

// edit button functionality
function handleEditButtonClick(e) {
  e.preventDefault();
  const itemList = e.target.parentElement;

  // getting the id from the li element.
  const itemId = itemList.getAttribute("id");

  const [name, email, phone] = itemList.textContent.trim().split(" - ");
  const items = document.querySelectorAll('input[type="text"]');

  items[0].value = name;
  items[1].value = email;
  items[2].value = phone;
  itemList.remove();
  axios
    .delete(`${url}/${itemId}`)
    .then(() => {
        console.log("")
    })
    .catch((err) => console.log(err));
}


// After refreshing all the datas saved into the browser.
window.addEventListener("DOMContentLoaded", (e) => {
  axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .then((datas) => {
      datas.forEach((data) => {
        createListItem(data);
      });
    })
    .catch((err) => console.log(err));
});
