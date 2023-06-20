
const submitBtn = document.getElementById("submit-button");
let i = 1;

submitBtn.addEventListener("click", handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();

  const inputItems = document.querySelectorAll('input[type="text"]');
  const obj = {};

  inputItems.forEach(({ name, value }) => {
    obj[name] = value;
  });

  // this is the part of local storage.
  //   localStorage.setItem(obj.email, JSON.stringify(obj));
  //   const getItemEle = JSON.parse(localStorage.getItem(obj.email));
  //   createListItem(getItemEle);

  // NOW WE USE AXIOS.
  axios
    .post(
      "https://crudcrud.com/api/7d62e9f4c0714adb9de766d9421df543/bookAppointApp02",
      obj
    )
    .then((responce) => {
      createListItem(responce.data);
    });

  inputItems.forEach((item) => {
    item.value = "";
  });
  i++;
}

function createListItem(item) {
//   const div = document.querySelector(".body");
//   const ul = document.createElement("ul");
//   ul.className = "list-item";

  const listItems = document.getElementById('div-items');
  const li = document.createElement("li");
  li.className = "form-group mb-2"
  li.textContent = `${item.name} - ${item.email} - ${item.phone}  `;

  const delButton = document.createElement("input");
  delButton.type = "submit";
  delButton.value = "delete";
  delButton.className = "btn btn-dark p-1 delete";

  delButton.addEventListener("click", handleDeleteButtonClick);
  // Edit button
  const editButton = document.createElement("input");
  editButton.type = "submit";
  editButton.value = "edit";
  editButton.className = "btn btn-dark p-1 mx-2 edit";

//   editButton.addEventListener("click", handleEditButtonClick);

  li.appendChild(delButton);
  li.appendChild(editButton);
  listItems.appendChild(li);
}

// this is working fine!!.
function handleDeleteButtonClick(e) {
  const listItem = e.target.parentElement;
  listItem.remove();

}

// saving the Not deleted part

window.addEventListener('DOMContentLoaded', e=>{
    axios('https://crudcrud.com/api/7d62e9f4c0714adb9de766d9421df543/bookAppointApp02')
        .then(response=>{
            return response.data;
        })
        .then(datas=>{
            datas.forEach(data=>{
                createListItem(data);
            })
        })
        .catch(err=>console.log(err));
})

