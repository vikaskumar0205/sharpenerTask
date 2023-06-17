
// select button 
const addExpanceBtn = document.getElementById('addExpance');

addExpanceBtn.addEventListener('click', addExpanceBtnClick);

function addExpanceBtnClick(e) {
    // e.preventDefault();
    e.preventDefault();

    // find values
    const form = document.getElementById('form');

    const inputList = document.querySelectorAll('.item-list');
    // console.log(inputList);

    // create new obj
    const obj = {};
    inputList.forEach(item=>{
        obj[item.name] = item.value;
    });

    // adding in localStorage
    localStorage.setItem(obj.expance, JSON.stringify(obj));

    const getItem = JSON.parse(localStorage.getItem(obj.expance));

    // create li list and add to the form as well as local storage
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.textContent = `${getItem.expance}-${getItem.description}-${getItem.category} `;

    // delete button
    const deleteBtn = document.createElement('input');
    deleteBtn.type = "submit";
    deleteBtn.name = "delete";
    deleteBtn.id = "delete-button";
    deleteBtn.className = "delete-button btn-dark";
    deleteBtn.value = "delete expance"

    // add event 
    deleteBtn.addEventListener('click', deleteBtnClick);

    // edit button
    const editBtn = document.createElement('input');
    editBtn.type = "submit";
    editBtn.name = "edit";
    editBtn.id = "edit-button";
    editBtn.className = "edit-button btn-dark active";
    editBtn.value = 'edit expance';

    // add event
    editBtn.addEventListener('click', editBtnClick);

    li.appendChild(deleteBtn);
    li.appendChild(editBtn);

    ul.appendChild(li);

    form.appendChild(ul);

    // deleted items from the text box
    inputList.forEach(item=>{
        if(item.name === "category") item.value = "select category";
        else item.value = "";
    })

}


function findKey(text) {
    let key = "";
    for(let char of text) {
        if(char ==='-') {
            // console.log(key);
            break;
        }
        key += char;
    }
    key.trim();
    return key;

}

function deleteBtnClick(e) {
    e.preventDefault();

    const text = e.target.parentElement.textContent;
    // console.log(text);
    const targetkey = findKey(text);
    localStorage.removeItem(targetkey);

    // second method:)
    // const keys = Object.keys(localStorage);
    // // console.log(keys);
    // keys.forEach(key=>{
    //     const findKey = text.indexOf(key);
    //     if(findKey!=-1) {
    //         localStorage.removeItem(key);
    //     }
    // });

    // also deleted from the browser
    e.target.parentElement.remove();

}


function editBtnClick(e) {
    e.preventDefault();
    const text = e.target.parentElement.textContent;

    const targetKey = findKey(text);
    const getItem = JSON.parse(localStorage.getItem(targetKey));
    const inputList = document.querySelectorAll('.item-list');
    const getItemArr = Object.values(getItem);
    // console.log(getItemArr);
    getItemArr.forEach((val, index)=>{
        // console.log(val);
        inputList[index].value = val;
    })
    localStorage.removeItem(targetKey);

    // second method:)
    // console.log(text);
    // const keys = Object.keys(localStorage);
    // console.log(keys);
    // keys.forEach(key=>{
    //     const findKey = text.indexOf(key);
    //     if(findKey!=-1) {
            // localStorage.removeItem(key);
            // const getItem = JSON.parse(localStorage.getItem(key));
            // const inputList = document.querySelectorAll('.item-list');
            // const getItemArr = Object.values(getItem);
            // // console.log(getItemArr);
            // getItemArr.forEach((val, index)=>{
            //     // console.log(val);
            //     inputList[index].value = val;
            // })
            // localStorage.removeItem(key);

    //     }
    // });

    // also deleted from the browser
    e.target.parentElement.remove();


}


// after refreshing saving part

const getIteKey = Object.keys(localStorage);

getIteKey.forEach(key=>{
    const getItem = JSON.parse(localStorage.getItem(key));

    // adding list
    const form = document.getElementById('form');
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.textContent = `${getItem.expance}-${getItem.description}-${getItem.category} `;

    // delete button
    const deleteBtn = document.createElement('input');
    deleteBtn.type = "submit";
    deleteBtn.name = "delete";
    deleteBtn.id = "delete-button";
    deleteBtn.className = "delete-button btn-dark";
    deleteBtn.value = "delete expance"

    // add event 
    deleteBtn.addEventListener('click', deleteBtnClick);

    // edit button
    const editBtn = document.createElement('input');
    editBtn.type = "submit";
    editBtn.name = "edit";
    editBtn.id = "edit-button";
    editBtn.className = "edit-button btn-dark active";
    editBtn.value = 'edit expance';

    // add event
    editBtn.addEventListener('click', editBtnClick);

    li.appendChild(deleteBtn);
    li.appendChild(editBtn);

    ul.appendChild(li);

    form.appendChild(ul);

})
