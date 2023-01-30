let Aname=document.querySelector('.Aname')
let desc=document.querySelector('.desc')
let container=document.querySelector('.container')
let btn=document.querySelector('.btn');
let mcont=document.querySelector('.main-cont');


let ls=localStorage.getItem('tickets');
let db=ls?JSON.parse(ls):[];

let totalA=0;

if(db){
    db.map((val)=>{
    createTicket(val.A,val.descV,val.uid);
    totalA += parseInt(val.A);
      })
      console.log("previous",totalA);
      showAmount(totalA);
}


function showAmount(amt){
    let showA=document.createElement('h1');
    showA.classList.add('showA');
    showA.textContent=`Total Amount -> ${amt}`;
     mcont.appendChild(showA)
}

function removeAmount(){
    let showA=mcont.querySelector('.showA');
    showA.remove();

}


btn.addEventListener('click',()=>{
    let A=Aname.value;
    let descV=desc.value;
    descV.trim();
    // let mn=mbno.value;
   if(A === '' || descV === '' ){
    alert('please enter Amount and Description')
   }else{
        let uid=Math.random();
        db.push({A,descV,uid});
        totalA += parseInt(A);
        // console.log('click',totalA);
        removeAmount();
        showAmount(totalA)
        createTicket(A,descV,uid);
        // console.log(uid)
   }
})

function createTicket(A,descV,ticketId){
    // console.log(uid)
    let divtag=document.createElement('div');
    divtag.classList.add('parentcont');
    divtag.innerHTML=`
                        <div class='one-ticket'>
                            <label>Amount - </label>
                            <div class="child cExA">${A}</div>
                        </div>
                        <div class='one-ticket'>
                            <label>Desc - </label>
                            <div class="child cDesc ">${descV} </div>
                        </div>
                         <button class='delete' onclick='handleRemove(${ticketId})'>Delete</button>`

    
    container.appendChild(divtag);
    Aname.value='';
    desc.value='';
    localStorage.setItem('tickets',JSON.stringify(db));

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
      totalA -= db[idx].A;
      removeAmount();
      showAmount(totalA);
       db.splice(idx,1);
       localStorage.setItem('tickets',JSON.stringify(db));
}


