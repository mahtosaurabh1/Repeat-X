let Aname=document.querySelector('.Aname')
let desc=document.querySelector('.desc')
let container=document.querySelector('.container')
let btn=document.querySelector('.btn');
let mcont=document.querySelector('.main-cont');


let totalA=0;

async function  fetchOldData(){
    try{
        let d= await axios.get('https://crudcrud.com/api/aa72ede5a77948fdb96847f86af41ef2/addtocart');
     d.data.map((val)=>{
        // console.log(val._id);
        createTicket(val.A,val.descV,val._id);
        totalA += parseInt(val.A);
     })
     showAmount(totalA);
    }catch(err){
        console.log(err)
    }
}
fetchOldData();


function showAmount(amt){
   try{
    let showA=document.createElement('h1');
    showA.classList.add('showA');
    showA.textContent=`Total Amount -> ${amt}`;
    mcont.appendChild(showA)
   }catch(err){
    console.log(err);
   }
}

function removeAmount(){
    try{
        let showA=mcont.querySelector('.showA');
    showA.remove();
    }catch(err){
        console.log(err);
    }
}


btn.addEventListener('click',()=>{
   try{
    let A=Aname.value;
    let descV=desc.value;
    descV.trim();
   if(A === '' || descV === '' ){
    alert('please enter Amount and Description')
   }else{
    totalA += parseInt(A);
    removeAmount();
    showAmount(totalA)
    let obj={A,descV};
    axios.post('https://crudcrud.com/api/aa72ede5a77948fdb96847f86af41ef2/addtocart',obj)
    .then((resolve)=>{
        createTicket(resolve.data.A,resolve.data.descV,resolve.data._id);
    })
    .catch((error)=>{
        console.log(error)
    })

   }
   }catch(err){
    console.log(err)
   }
})

function createTicket(A,descV,ticketId){
    // console.log(uid)
  try{
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
                         <button class='delete'>Delete</button>`

    
    container.appendChild(divtag);
    Aname.value='';
    desc.value='';

    // delete from ui
    let del=divtag.querySelector('.delete');
    del.addEventListener('click',async ()=>{

        await axios.delete(`https://crudcrud.com/api/aa72ede5a77948fdb96847f86af41ef2/addtocart/${ticketId}`)
        .then(async (resolve)=>{
             // delete amount
        totalA = 0;
        let d= await axios.get('https://crudcrud.com/api/aa72ede5a77948fdb96847f86af41ef2/addtocart');
        d.data.map((val)=>{
           totalA += parseInt(val.A);
        })
        removeAmount();
        showAmount(totalA);
        
        divtag.remove();

        }).catch((er)=>{
            console.log(er);
        })

    })
  }catch(err){
    console.log(err)
  }
}
