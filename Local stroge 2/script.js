let name=document.querySelector('.name')
let email=document.querySelector('.email')
let container=document.querySelector('.container')
let btn=document.querySelector('.btn')
let mbno=document.querySelector('.mbno')

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
    let mn=mbno.value;
   if(n === '' || e === '' || mn==''){
    alert('please enter name and email and mobile number')
   }else{
        db.push({n,e,mn});
        createTicket(n,e,mn);
   }
})

function createTicket(n,e,mn){
    let divtag=document.createElement('div');
    divtag.innerHTML=`<div class="child">Name ->${n} : Email -> ${e} : Mb No.  ${mn} </div>`
    container.appendChild(divtag);
    name.value='';
    email.value='';
    mbno.value='';
    localStorage.setItem('tickets',JSON.stringify(db));
}

