let Aname=document.querySelector('.Aname')
let desc=document.querySelector('.desc')
let container=document.querySelector('.container');
let mainCont=document.querySelector('.main-cont')
let btn=document.querySelector('.btn')
let sel=document.querySelector('#selc');


let ls=localStorage.getItem('tickets');
let db=ls?JSON.parse(ls):[];

let totalA=0;

if(db){
    db.map((val)=>{
    createTicket(val.A,val.descV,val.selv,val.uid);
    totalA += parseInt(val.A);
      })
      showAmount(totalA);
}

function showAmount(amt){
    let showA=document.createElement('h1');
    showA.classList.add('showA');
    showA.textContent=`Total Amount -> ${amt}`;
     mainCont.appendChild(showA)
}

function removeAmount(){
    let showA=mainCont.querySelector('.showA');
    showA.remove();

}


btn.addEventListener('click',()=>{
    let A=Aname.value;
    let descV=desc.value;
    descV.trim();
    // let mn=mbno.value;
    let selv=sel.value;
    // console.log(selV)
   if(A === '' || descV === '' || selv==''){
    alert('please enter Amount and Description and mobile number')
   }else{
        totalA += parseInt(A);
        let uid=Math.random();
        db.push({A,descV,selv,uid});
        createTicket(A,descV,selv,uid);

        removeAmount();
        showAmount(totalA);
        // console.log(uid)
   }
})

function createTicket(A,descV,selv,ticketId){
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
                        <div class='one-ticket'>
                        <label>Category - </label>
                        <div class="child cSelcV" > ${selv}</div>
                       </div>
                         <button class='delete' onclick='handleRemove(${ticketId})'>Delete</button>
                         <div class='update'  ><i class="fa fa-lock"></i></div>`

    
    container.appendChild(divtag);
    Aname.value='';
    desc.value='';
    localStorage.setItem('tickets',JSON.stringify(db));

    // update from ui
    let update=divtag.querySelector('.update i');
    let cExA=divtag.querySelector('.cExA');
    let cDesc=divtag.querySelector('.cDesc');
    let cSelcV=divtag.querySelector('.cSelcV');
    update.addEventListener('click',()=>{
        if(update.classList.contains('fa-lock')){
            update.classList.remove('fa-lock');
            update.classList.add('fa-unlock');
            cExA.setAttribute('contenteditable','true');
            cDesc.setAttribute('contenteditable','true');
            cSelcV.innerHTML=` <select  class='itag' id="selc">
                                    <option value="food">food</option>
                                    <option value="Movie">Movie</option>
                                    <option value="play">play</option>
                                    <option value="shoping">Shooping</option>
                                </select>`

        }else{
            update.classList.remove('fa-unlock');
            update.classList.add('fa-lock');
            cExA.setAttribute('contenteditable','false');
            cDesc.setAttribute('contenteditable','false');
            // cSelcV.setAttribute('contenteditable','false');
            let sel=cSelcV.querySelector('#selc');
            cSelcV.textContent=sel.value;
        }

        let idx=-1;
        for(let i=0;i<db.length;i++){
          if(db[i].uid === ticketId){
              idx=i;
              break;
          }
         }
         db[idx].A=cExA.textContent;
         db[idx].descV=cDesc.textContent;
         db[idx].selv=cSelcV.textContent;
        //  console.log(db[idx].n);
         localStorage.setItem('tickets',JSON.stringify(db));
  
            let totalA=0;
            db.map((val)=>{
                    totalA += parseInt(val.A);
            })
            removeAmount();
            showAmount(totalA);
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
       localStorage.setItem('tickets',JSON.stringify(db));

       let totalA=0;

       db.map((val)=>{
            totalA += parseInt(val.A);
       })
       removeAmount();
       showAmount(totalA);

}


