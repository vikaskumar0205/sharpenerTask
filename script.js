
const mainUrl = "https://crudcrud.com/api/3e8a99c4372743338b189d90f74b09d2/dataCollection";

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
      mainUrl,
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

  const listItems = document.getElementById("div-items");
  const li = document.createElement("li");
  li.className = "form-group mb-2";

  // this is for the future excess the id of the list items.

  // IMPORTANT!!!
  li.setAttribute("id", item._id);


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

  // IMPORTANT!!!
  const itemId = listItem.getAttribute("id");

  // Delete item from the API using Axios as well as the browser.
  axios
    .delete(
      `${mainUrl}/${itemId}`
    )
    .then(() => {
      listItem.remove();
    })
    .catch((error) => {
      console.log(error);
    });



}

// saving details after refreshing the page.

window.addEventListener('DOMContentLoaded', e=>{
    axios.get(mainUrl)
        .then(response=>{
          return response.data;
        })
        .then(datas=>{
          datas.forEach(data=>{
            createListItem(data);
          })
        })
        .catch(err=>console.log(err));
        
});
