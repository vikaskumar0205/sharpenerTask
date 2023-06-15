

const submitBtn = document.getElementById('submit-button');
// console.log(submitBtn)
submitBtn.addEventListener('click', e=>{
    const items = document.getElementById('items')
    const inputItems = document.querySelectorAll('input[type="text"]')
    inputItems.forEach(item=>{

        // adding the datas in localStorage
        localStorage.setItem(item.name, item.value);

    });
});