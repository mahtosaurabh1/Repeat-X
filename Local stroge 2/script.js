let Uname=document.querySelector('.name')
let email=document.querySelector('.email')
let container=document.querySelector('.container')
let btn=document.querySelector('.btn')
let mbno=document.querySelector('.mbno');



let ls=localStorage.getItem('tickets');
let db=ls?JSON.parse(ls):[];


if(db){
    db.map((val)=>{
    createTicket(val.n,val.e,val.mn,val.uid)
      })
}


btn.addEventListener('click',()=>{
    let n=Uname.value;
    n.trim();
    let e=email.value;
    e.trim();
    let mn=mbno.value;
   if(n === '' || e === '' || mn==''){
    alert('please enter name and email and mobile number')
   }else{
        let uid=Math.random();
        db.push({n,e,mn,uid});
        createTicket(n,e,mn,uid);
        // console.log(uid)
   }
})

function createTicket(n,e,mn,ticketId){
    // console.log(uid)
    let divtag=document.createElement('div');
    divtag.classList.add('parentcont');
    divtag.innerHTML=`<div class="child">Name ->${n} : Email -> ${e} : Mb No.  ${mn}</div>
                      <button class='delete' onclick='handleRemove(${ticketId})'>Delete</button>`

    
    container.appendChild(divtag);

    let del=divtag.querySelector('.delete');
    del.addEventListener('click',()=>{
        divtag.remove();
    })

    Uname.value='';
    email.value='';
    mbno.value='';
    localStorage.setItem('tickets',JSON.stringify(db));

}

function handleRemove(uniqueId){
      let idx=-1;
      for(let i=0;i<db.length;i++){
        if(db[i].uid === uniqueId){
            idx=i;
            break;
        }
       }
       db.splice(idx,1);
       localStorage.setItem('tickets',JSON.stringify(db));
}

