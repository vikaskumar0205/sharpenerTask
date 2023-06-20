


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
      "https://crudcrud.com/api/e0b19a278d9f4deaaf0c9b60915e46be/DataCollection",
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
  const div = document.querySelector(".body");
  const ul = document.createElement("ul");
  ul.className = "list-item";
  const li = document.createElement("li");
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

  editButton.addEventListener("click", handleEditButtonClick);

  li.appendChild(delButton);
  li.appendChild(editButton);
  ul.appendChild(li);
  div.appendChild(ul);
}

// this is working fine!!.
function handleDeleteButtonClick(e) {
  const listItem = e.target.parentElement;
  listItem.remove();

  const itemText = listItem.textContent.trim();
  console.log(itemText);
  const [name, email, phone] = itemText.split(" - ");
  
//   axios.get('https://crudcrud.com/api/e0b19a278d9f4deaaf0c9b60915e46be/DataCollection')
//     .then(responce=>{
//         // console.log(responce.data);
//         return responce.data;
//     })
//     .then(datas=>{
//         datas.forEach(data=>{
//             console.log(data._id);
//             // if(data.email===email) {
//             //     // return data.email;
               
//             // }
//         })
//     })
//     .catch(err=>console.log(err));
    

//   const storedItems = Object.keys(localStorage);

//   storedItems.forEach((key) => {
//     const storedItem = JSON.parse(localStorage.getItem(key));
//     if (
//       storedItem.name === name &&
//       storedItem.email === email &&
//       storedItem.phone === phone
//     ) {
//       localStorage.removeItem(key);
//     }
//   });
}

// function handleEditButtonClick(e) {
//   // console.log(e.target.parentElement.textContent);
//   // gett all text from the li tag
//   const allText = e.target.parentElement.textContent;
//   e.target.parentElement.remove();
//   // gett all keys
//   const storedItems = Object.keys(localStorage);

//   // check which is present in all text coz one key must be present in the all text.
//   storedItems.forEach((key) => {
//     // check present or not
//     const extractKey = allText.indexOf(key);
//     if (extractKey !== -1) {
//       // if present
//       // console.log(localStorage.getItem(key));
//       // get all items from the localStorage
//       const getItemFromLocalStorage = JSON.parse(localStorage.getItem(key));

//       // select input tag which we will have to do change
//       const itemList = document.getElementById("items");
//       const inputItems = itemList.querySelectorAll("input");
//       // console.log(inputItems);

//       // restore the all values of items
//       inputItems[0].value = getItemFromLocalStorage.name;
//       inputItems[1].value = getItemFromLocalStorage.email;
//       inputItems[2].value = getItemFromLocalStorage.phone;

//       // remove items form screen as well as localStorage
//       e.target.parentElement.remove();
//       localStorage.removeItem(key);
//       // break;
//     }
//   });
// }

function handleEditButtonClick(e) {
    console.log()
    axios.get('https://crudcrud.com/api/e0b19a278d9f4deaaf0c9b60915e46be/DataCollection')
        .then(responce=>{
            // console.log(responce.data);
            return responce.data;
        })
        .then(datas=>{
            datas.forEach(data=>{
                console.log(data._id);
            })
        })
        .catch(err=>console.log(err));

}
