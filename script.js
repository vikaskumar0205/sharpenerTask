const mainUrl =
  "https://crudcrud.com/api/6d227778b4e641bcb0eac04ab2a6437d/dataCollection2";

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
    .post(mainUrl, obj)
    .then((response) => {
      createListItem(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

  inputItems.forEach((item) => {
    item.value = "";
  });
  i++;
}

function createListItem(item) {
  const listItems = document.getElementById("div-items");
  const li = document.createElement("li");
  li.className = "form-group mb-2";
  li.setAttribute("id", item._id);
  li.textContent = `${item.name} - ${item.email} - ${item.phone}`;

  const delButton = document.createElement("input");
  delButton.type = "submit";
  delButton.value = "delete";
  delButton.className = "btn btn-dark p-1 delete";
  delButton.addEventListener("click", handleDeleteButtonClick);

  const editButton = document.createElement("input");
  editButton.type = "submit";
  editButton.value = "edit";
  editButton.className = "btn btn-dark p-1 mx-2 edit";
  editButton.addEventListener("click", handleUpdateButtonClick);

  li.appendChild(delButton);
  li.appendChild(editButton);
  listItems.appendChild(li);
}


function handleUpdateButtonClick(e) {
  e.preventDefault();
  const itemList = e.target.parentElement;
  const itemId = itemList.getAttribute("id");
  console.log(itemId);
  const [name, email, phone] = itemList.textContent.trim().split(" - ");
  const items = document.querySelectorAll('input[type="text"]');

  // Prepare the updated data object
  const updatedData = {
    "name": items[0].value,
    "email": items[1].value,
    "phone": items[2].value,
  };
  console.log(updatedData);

  axios
    .put(`${mainUrl}/${itemId}`, updatedData)
    .then(() => {
      itemList.remove();
    })
    .catch((err) => console.log(err));
}

window.addEventListener("DOMContentLoaded", (e) => {
  axios
    .get(mainUrl)
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
