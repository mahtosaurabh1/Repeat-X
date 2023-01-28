let current=new Date();
let cont=document.querySelector('.cont')

const posts=[{title:'post 1',body:'this is post 1',createdat:current.getTime()/1000},
{title:'post 2',body:'this is post 1',createdat:current.getTime()/1000}];


let pT=current.getTime()/1000;

function getPosts(){
    setTimeout(()=>{
        let post=''
        posts.forEach((val,i)=>{
            
            post += `<li>${val.title} ${val.body}  ${Math.floor(pT-val.createdat)}</li>`
        })
        cont.innerHTML=post;

    },1000)
}

function createPost(post){
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        posts.push(post);
        const error=false;
        if(!error){
            resolve();
        }else{
            reject();
        }
    },2000)
   })
}


createPost({title:'post 3',body:'this is post 1',createdat:current.getTime()/1000,presentTime:''}).then(getPosts)

function removePost(){
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
         posts.pop();
         const error=false;
         if(!error){
             resolve();
         }else{
             reject("error");
         }
         console.log("a");
     },1000)
    })
 }


let a=setInterval(()=>{
    removePost().then(getPosts).catch((er)=>{
    })
},2000)

setTimeout(()=>{
    clearInterval(a);
},6000)



 


// let current=new Date();
// let a=current.getTime()/1000;
// setTimeout(()=>{
//   let current=new Date();
//   let b=current.getTime()/1000;
//   console.log(Math.floor(b-a));
// },2000)
