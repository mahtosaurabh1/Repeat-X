let name=document.querySelector('.name')
let email=document.querySelector('.email')
let container=document.querySelector('.container')
let btn=document.querySelector('.btn')

let ls=localStorage.getItem('tickets');
let db=ls?JSON.parse(ls):[];


if(db){
    db.map((val)=>{
    createTicket(val.n,val.e)
      })
}


btn.addEventListener('click',()=>{
    let n=name.value;
    n.trim();
    let e=email.value;
    e.trim();
   if(n === '' || e === ''){
    alert('please enter name and email')
   }else{
        db.push({n,e});
        createTicket(n,e);
   }
})

function createTicket(n,e){
    let divtag=document.createElement('div');
    divtag.innerHTML=`<div class="child">${n} : ${e} </div>`
    container.appendChild(divtag);
    name.value='';
    email.value='';
    localStorage.setItem('tickets',JSON.stringify(db));
}
