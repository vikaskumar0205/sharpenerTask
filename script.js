const getTime = ()=> {
  const date = new Date();
  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
}

const posts = [];

const updateLastUserActivityTime=async()=> {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(getTime());
    }, 1000);
  });
}

const createPost=async(post)=> {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({title: post});
      resolve();
    }, 1000);
  });
}

const deletePost=async()=> {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        const popEle = posts.pop();
        resolve(popEle);
      } else reject("ERROR");
    }, 1000);
  });
}
try {
  Promise.all([updateLastUserActivityTime(), createPost('POST1'), createPost('POST2')])
    .then(time=>console.log(time[0]))
    .then(deletePost)
    .then(data=>console.log(data.title))
    .then(deletePost)
    .then(data=>console.log(data.title))
    .catch(err=>console.log(err));
} catch (error) {
  console.log(error);
}
