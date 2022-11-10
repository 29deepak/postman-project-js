const posts=[
  {title:'post one',body:'this is post one'},
  {title:'post two',body:'this is post two'}
];

function getposts(){
  setTimeout(() => {
    let output='';
    posts.forEach((post,index)=>{
      output+=`<li>${post.title} seconds ago</li>`;
      
    });
    document.body.innerHTML =output
  },1000);
}
function createPost(post){
  return new promise((resolve,reject) => {
    setTimeout(() =>{
     posts.push(post);
      const error=false;
      if(!error){
        resolve();
      }else{
        reject("something went wrong")
      }
      
  },2000);
    
  });

}
/*function create4post(post,callback){
  setTimeout(()=>{
    posts.push({...post,createdat:new Date().getTime()})
    callback();
    
  },6000)
}*/

createPost({title:'post three',body:'this is post three'}).then(getposts);

