const url =
//   "https://crudcrud.com/api/e3229bf0a34b414ea5e5d5e3e122e03e/adminpage";

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
      li.appendChild(deleteBtn);
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
    .then(() => console.log())
    .catch((err) => console.log(err));
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
