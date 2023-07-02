const posts = [];

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const date = new Date();
      resolve();
    }, 1000);
  });
}

function createPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({ title: "POST" });
      resolve();
    }, 1000);
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        const popEle = posts.pop();
        resolve(popEle);
      } else reject("ERROR");
    }, 1000);
  });
}
try {
  Promise.all([updateLastUserActivityTime(), createPost(), createPost()])
    .then(deletePost)
    .then((data) => console.log(data.title))
    .then(deletePost)
    .then(data=>console.log(data.title));
} catch (error) {
  console.log(error);
}
