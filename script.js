// const getColdDrinks = async ()=> {
//     const promise = await new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const getButter = true;

//             if(getButter) {
//                 resolve("now let's got for the cold drinks");
//             }
//             else {
//                 reject("sorry , darling!! ")
//             }
//         }, 1000);
//     })
//     console.log(promise);
// }
// getColdDrinks();

// 2nd part of this question

// async function updateLastUserActivityTime() {
//     return await new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const date = new Date();
//             resolve();
//         },1000);
//     });
// };
// async function createPost() {
//     return await new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             posts.push({title:"POST"});
//             resolve();
//         }, 1000);
//     });
// };
// async function deletePost() {
//     return await new Promise((resolve, reject)=>{
//         let n = posts.length;
//         if(n>0) {
//             const popEle = posts[n-1];
//             posts.pop();
//             resolve(popEle);
//         }
//         else reject("ERROR");
//     })
// }

async function update() {
  const posts = [];
  const updateLastUserActivityTime = new Promise((resolve, reject) => {
    setTimeout(() => {
      const date = new Date();
      resolve();
    }, 1000);
  });

  
  const createPost = new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({ title: "POST" });
      resolve();
    }, 1000);
  });

  let [udateUseTime, post] = await Promise.all([
    updateLastUserActivityTime,
    createPost,
  ]);
  console.log(`${udateUseTime} and ${post}`);
}
update();
// const deletePost = new Promise((resolve, reject) => {
//   let n = posts.length;
//   if (n > 0) {
//     const popEle = posts[n - 1];
//     posts.pop();
//     resolve(popEle);
//   } else reject("ERROR");
// });
// try{
// Promise.all([updateLastUserActivityTime(), createPost()])
//     .then(deletePost)
//     .then(data=>console.log(data.title));
// }catch(error){
//     console.log(error)
// };
