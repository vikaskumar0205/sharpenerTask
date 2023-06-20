// AXIOS GLOBAL
// axios.defaults.headers.common["X-auth-token"] =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";


// GET REQUEST
function getTodos() {
  //   axios({
  //     method:'GET',
  //     url:'https://jsonplaceholder.typicode.com/todos',
  //     params:{_limit:5}
  //   })
  //   .then(resp=> showOutput(resp))
  //   .catch(error=>console.log(error));

  // short methods understoodable code
  axios
    .get("https://jsonplaceholder.typicode.com/todos?_limit=5", {timeout:500}) // extra added ? and _limit=5 for getting 5 request only.
    .then((res) => showOutput(res))
    .catch((error) => console.log(error));

  // or even shorter
  // axios('https://jsonplaceholder.typicode.com/todos?_limit=5')
  // .then(res=>showOutput(res))
  // .catch(error=>console.log(error));
}

// POST REQUEST
function addTodo() {
  //   axios({
  //     method:'post',
  //     url:'https://jsonplaceholder.typicode.com/todos',
  //     data:{
  //         title:'new todos',
  //         completed:'false'
  //     }
  //   })
  //   .then(res=>showOutput(res))
  //   .catch(error=>console.log(error));

  // shoter way
  axios
    .post("https://jsonplaceholder.typicode.com/todos", {
      title: "new todos",
      completed: "false",
    })
    .then((res) => showOutput(res))
    .catch((err) => console.log(err));
}

// PUT/PATCH REQUEST
function updateTodo() {
  axios
    .patch("https://jsonplaceholder.typicode.com/todos/1", {
      // here link last 1 shows id.
      title: "updated todos",
      completed: "true",
    })
    .then((res) => showOutput(res))
    .catch((err) => console.log(err));

  // put and patch are works same but in the case of put
  // automatic will be generated and in the case of
  // patch useId and id both will be generated.
  // Both are created a new objects by removing the previous one.
}

// DELETE REQUEST
function removeTodo() {
  axios
    .delete("https://jsonplaceholder.typicode.com/todos/1", {
      title: "delete todos",
      completed: "true",
    })
    .then((res) => showOutput(res))
    .catch((err) => console.log(err));
}

// SIMULTANEOUS DATA
function getData() {
  axios
    .all([
      axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5"),
      axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5"),
    ])

    .then(
      axios.spread((gets, posts) => {
        // if we put the res inside the then we got Object
        // and Object we cann't traverse easily that's why
        // we use the axios.spread() method.
        showOutput(posts);
      })
    )
    .catch((err) => console.log(err));
}

// CUSTOM HEADERS
function customHeaders() {
  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: "SomeToken",
      Accept: "no application",
    },
  };

  axios
    .post(
      "https://jsonplaceholder.typicode.com/todos",
      {
        title: "NEW TODOS",
        completed: "false",
      },
      config
    )
    .then((res) => showOutput(res))
    .catch((err) => console.log(err));
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  const options = {
    method: "post",
    url: "https://jsonplaceholder.typicode.com/todos",
    data: {
      title: "Hello World",
    },
    transformResponse: axios.defaults.transformResponse.concat((data) => {
      data.title = data.title.toUpperCase();
      return data;
    }),
  };
  axios(options)
    .then((res) => showOutput(res))
    .catch((err) => console.log(err));
}

// ERROR HANDLING
function errorHandling() {
  axios
    .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
    .then((res) => showOutput(res))
    .catch((err) => {
      // Server respong with a status other than 200 range
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);

        if (err.response.status === 404) alert("Error: page not found");
      } else if (err.request) {
        // request is made but no response
        console.lor(err.request);
      } else {
        console.log(err.message);
      }
    });
}

// CANCEL TOKEN
function cancelToken() {
  const source = axios.CancelToken.source();
  axios
    .get("https://jsonplaceholder.typicode.com/todos", {
      cancelToken: source.token
    })
    .then((res) => showOutput(res))
    .catch((thrown)=>{
      if(axios.isCancel(thrown)) {
        console.log('Request canceled', thrown.message);
      }
    })
  if(true) {
    source.cancel('canceled request');
  }
}

// INTERCEPTING REQUESTS
// This is not working
// axios.interceptors.request.use(
//   (config) => {
//     console.log(
//       `${config.method.toUpperCase()} request sent to ${
//         config.url
//       } at ${new Date().getTime()}`
//     )
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// )

// AXIOS INSTANCES
// This is also not working
// const axiosInstance = axios.create({
//   baseURL:'https://jsonplaceholder.typicode.com'
// });

// axiosInstance.get('/comments').then(res=>showOutput(res));

// Show output in browser
function showOutput(res) {
  document.getElementById("res").innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  //INTERCEPTING REQUESTS
  console.log(
    `${res.config.method.toUpperCase()} request sent to ${
      res.config.url
    } at ${new Date().getTime()}`
  );
}

// Event listeners
document.getElementById("get").addEventListener("click", getTodos);
document.getElementById("post").addEventListener("click", addTodo);
document.getElementById("update").addEventListener("click", updateTodo);
document.getElementById("delete").addEventListener("click", removeTodo);
document.getElementById("sim").addEventListener("click", getData);
document.getElementById("headers").addEventListener("click", customHeaders);
document
  .getElementById("transform")
  .addEventListener("click", transformResponse);
document.getElementById("error").addEventListener("click", errorHandling);
document.getElementById("cancel").addEventListener("click", cancelToken);
