
const url ="";
  // "https://crudcrud.com/api/34e1d2a5a1af43b297d5e375ed98d068/adminpage2";

document.getElementById("submit-button").addEventListener("click", (e) => {
  e.preventDefault();
  // console.log(e.target);

  const itemList = document.querySelectorAll(".items");
  // console.log(itemList);
  // itemList.forEach(item=>console.log(item.value));

  // also save into the API using AXIOS

  const chooseSection = document.querySelectorAll("ul");

  chooseSection.forEach((section) => {
    if (section.id === itemList[2].value) {
      //   console.log(section);
      const obj = {};
      itemList.forEach(({ name, value }) => {
        obj[name] = value;
      });

      axios
        .post(url, obj)
        .then((res) => {
          createItems(res.data);
        })
        .catch((err) => console.log(err));
      
      itemList.forEach((item, ind)=>{
        if(ind===2) item.value = "select a item";
        else item.value = "";
      })
    }
  });

});

function createItems(item) {
  //   console.log(itemList);
  const chooseSection = document.querySelectorAll("ul");
  chooseSection.forEach((ul) => {
    if (ul.id === item.category) {
      // console.log(item);
      const li = document.createElement("li");
      li.textContent = `${item.selling_price}-${item.product_name}-${
        item.category
      }`;

      li.setAttribute("id", item._id);
      // create delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.type = "submit";
      deleteBtn.textContent = "Delete";

      deleteBtn.addEventListener("click", DeleteButtonclick);

      // create edit button
      const editBtn = document.createElement('button');
      editBtn.type = "submit";
      editBtn.textContent = "Edit"

      editBtn.addEventListener('click', EditButtonClick);      

      li.appendChild(deleteBtn);
      li.appendChild(editBtn);
      //   console.log(item);
      //   console.log(section.parentElement);
      ul.appendChild(li);
    }
  });
}

// click the delete button
function DeleteButtonclick(e) {
  e.preventDefault();
  const ulItem = e.target.parentElement;

  const itemId = ulItem.getAttribute("id");
  ulItem.remove();
  axios
    .delete(`${url}/${itemId}`)
    .catch((err) => console.log(err));
}

function EditButtonClick(e) {
  e.preventDefault();
  const liItem = e.target.parentElement;
  const itemId = liItem.getAttribute('id');
  const inputList = document.querySelectorAll('.items');

  liItem.remove();
  axios.get(`${url}/${itemId}`)
    .then(response=>{
      // console.log(response.data);
      const data = response.data;
      inputList[0].value = data.selling_price;
      inputList[1].value = data.product_name;
      inputList[2].value = data.category;
      return data._id;
    })
    .then(id=>{
      axios.delete(`${url}/${id}`)
        .catch(err=>console.log(err));
    })
    .catch(err=>console.log(err));

}

// after refreshing the page save the all datas

window.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();

  axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .then((datas) => {
      datas.forEach((data) => {
        createItems(data);
      });
    })
    .catch((err) => console.log(err));
});
