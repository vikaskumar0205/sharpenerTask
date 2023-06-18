
const posts = [];

function updateLastUserActivityTime() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const date = new Date();
            resolve();
        },1000);
    });
};


function createPost() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push({title:"POST"});
            resolve();
        }, 1000);
    });
};

function deletePost() {
    return new Promise((resolve, reject)=>{
        let n = posts.length;
        if(n>0) {
            const popEle = posts[n-1];
            posts.pop();
            resolve(popEle);
        }
        else reject("ERROR");
    })
}
try{
Promise.all([updateLastUserActivityTime(), createPost()])
    .then(deletePost)
    .then(data=>console.log(data.title));
}catch(error){
    console.log(error)
};