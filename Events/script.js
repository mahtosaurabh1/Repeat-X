let name=document.querySelector('.name')
let email=document.querySelector('.email')
let container=document.querySelector('.container')
let btn=document.querySelector('.btn')

btn.addEventListener('click',()=>{
    let n=name.value;
    n.trim();
    let e=email.value;
    e.trim();
    let divtag=document.createElement('div');
   if(n === '' || e === ''){
    alert('please enter name and email')
   }else{
    divtag.innerHTML=`<div class="child">${n} : ${e} </div>`
    container.appendChild(divtag)
    name.value='';
    email.value='';
   }
})