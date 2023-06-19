const getColdDrinks = async ()=> {
    const promise = await new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const getButter = true;

            if(getButter) {
                resolve("now let's got for the cold drinks");
            }
            else {
                reject("sorry , darling!! ")
            }
        }, 1000);
    })
    console.log(promise);
}
getColdDrinks();


// create and delete post using async and await
try {
  const posts = [{ title: "POST" }];
  let i=1;
  async function createPost() {
    return await new Promise((resolve) => {
      setTimeout(() => {
        posts.push({ title: `POST${i++}` });

        resolve(posts);
      }, 1000);
    });
  }
  async function deletePost(){
      return await new Promise((resolve, reject)=>{

          setTimeout(()=>{
              // reject("Emptys posts");

              if(posts.length > 0 ) {
                const poppedEle = posts.pop();
                resolve(poppedEle);
              }
              else reject("Emptys posts");
          }, 5000)

      })
  }
  
  let data =  Promise.all([createPost(createPost(createPost())),deletePost(), deletePost()]);
//   console.log(data)
  data.then(item=>{
    item.forEach(ele=>console.log(ele));
  }).catch(error=>console.log(error));
  
} catch (error) {
  console.log(error);
}
