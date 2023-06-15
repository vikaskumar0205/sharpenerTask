
const obj = {
    name: "vikas kumar",
    age: 23,
    email: "vikaskumar808425@gmail.com"
};

// convert the obj to JSON obj
// console.log(JSON.stringify(obj));

localStorage.setItem('obj', JSON.stringify(obj));

// convert the JSON obj to obj
// console.log(JSON.parse(JSON.stringify(obj)));