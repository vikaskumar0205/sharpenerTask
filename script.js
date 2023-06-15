

const submitBtn = document.getElementById('submit-button');
// console.log(submitBtn)
let i=0;
submitBtn.addEventListener('click', e=>{
    e.preventDefault();
    const items = document.getElementById('items')
    const inputItems = document.querySelectorAll('input[type="text"]')
    
    const obj = {};
    inputItems.forEach(item=>{

        // convert into object
        obj[item.name] = item.value;

        // adding the datas in localStorage
        // localStorage.setItem(item.name, item.value);

    });
    
    // console.log(JSON.stringify(obj));
    const strToJson = JSON.stringify(obj);
    const newObj = `obj${i}`;
    localStorage.setItem(newObj, strToJson);

    const getItemEle = JSON.parse(localStorage.getItem(newObj));

    
    console.log(getItemEle);
    console.log(getItemEle.name);
    // selecting a div for the inserting a ul list
    const div = document.querySelector(".body");

    

    if(i==0) {
        const ul = document.createElement('ul');
        ul.className = "list-item";
        const li1 = document.createElement('li');
        li1.appendChild(document.createTextNode("Name"));
        const li2 = document.createElement('li');
        li2.appendChild(document.createTextNode('Email'));
        ul.appendChild(li1);
        ul.appendChild(li2);
        div.appendChild(ul);
        i++;
    }
    
    const ul = document.createElement('ul');
    ul.className = "list-item";
    const li1 = document.createElement('li');
    li1.appendChild(document.createTextNode(getItemEle.name));
    const li2 = document.createElement('li');
    li2.appendChild(document.createTextNode(getItemEle.email));
    ul.appendChild(li1);
    ul.appendChild(li2);
    // console.log(ul);
    div.appendChild(ul);

    i++;

});


