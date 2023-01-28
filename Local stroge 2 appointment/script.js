let Uname=document.querySelector('.name')
let email=document.querySelector('.email')
let container=document.querySelector('.container')
let btn=document.querySelector('.btn')
let mbno=document.querySelector('.mbno');



let ls=localStorage.getItem('ticketsArr');
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
    divtag.innerHTML=`<div class="child cName">${n}</div>
                        <div class="child cEmail ">${e} </div>
                        <div class="child cPhno" > ${mn}</div>
                         <button class='delete' onclick='handleRemove(${ticketId})'>Delete</button>
                         <div class='update'  ><i class="fa fa-lock"></i></div>`

    
    container.appendChild(divtag);
    Uname.value='';
    email.value='';
    mbno.value='';
    localStorage.setItem('ticketsArr',JSON.stringify(db));

    // update from ui
    let update=divtag.querySelector('.update i');
    let cName=divtag.querySelector('.cName');
    let cEmail=divtag.querySelector('.cEmail');
    let cPhno=divtag.querySelector('.cPhno');
    update.addEventListener('click',()=>{
        if(update.classList.contains('fa-lock')){
            update.classList.remove('fa-lock');
            update.classList.add('fa-unlock');
            cName.setAttribute('contenteditable','true');
            cEmail.setAttribute('contenteditable','true');
            cPhno.setAttribute('contenteditable','true');
        }else{
            update.classList.remove('fa-unlock');
            update.classList.add('fa-lock');
            cName.setAttribute('contenteditable','false');
            cEmail.setAttribute('contenteditable','false');
            cPhno.setAttribute('contenteditable','false');
        }

        let idx=-1;
        for(let i=0;i<db.length;i++){
          if(db[i].uid === ticketId){
              idx=i;
              break;
          }
         }
         db[idx].n=cName.textContent;
         db[idx].e=cEmail.textContent;
         db[idx].mn=cPhno.textContent;
         console.log(db[idx].n);
         localStorage.setItem('ticketsArr',JSON.stringify(db));
    })

    // delete from ui
    let del=divtag.querySelector('.delete');
    del.addEventListener('click',()=>{
        divtag.remove();
    })

   


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
       localStorage.setItem('ticketsArr',JSON.stringify(db));
}


