

const submitBtn = document.getElementById('submit-button');
let i = 1;

submitBtn.addEventListener('click', handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();
  
  const inputItems = document.querySelectorAll('input[type="text"]');
  const obj = {};

  inputItems.forEach(({ name, value }) => {
    obj[name] = value;
  });

  const newObj = `obj${i}`;
  localStorage.setItem(newObj, JSON.stringify(obj));

  const getItemEle = JSON.parse(localStorage.getItem(newObj));

  createListItem(getItemEle);

  i++;
}

function createListItem(item) {
  const div = document.querySelector('.body');
  const ul = document.createElement('ul');
  ul.className = 'list-item';
  const li = document.createElement('li');
  li.textContent = `${item.name} - ${item.email} - ${item.phone}  `;

  const delButton = document.createElement('input');
  delButton.type = 'submit';
  delButton.value = 'delete';
  delButton.className = 'btn btn-dark p-1 delete';

  delButton.addEventListener('click', handleDeleteButtonClick);

  li.appendChild(delButton);
  ul.appendChild(li);
  div.appendChild(ul);
}

function handleDeleteButtonClick(e) {
    const listItem = e.target.parentElement;
    listItem.remove();
  
    const itemText = listItem.textContent.trim();
    const [name, email, phone] = itemText.split(' - ');
  
    const storedItems = Object.keys(localStorage);
  
    storedItems.forEach((key) => {
      const storedItem = JSON.parse(localStorage.getItem(key));
      if (
        storedItem.name === name &&
        storedItem.email === email &&
        storedItem.phone === phone
      ) {
        localStorage.removeItem(key);
      }
    });
  }
  


