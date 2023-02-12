let desc=document.querySelector('.desc')
let container=document.querySelector('.container')
let btn=document.querySelector('.btn');
let mcont=document.querySelector('.main-cont');



async function  fetchOldData(){
    try{
        let d= await axios.get('http://localhost:5000/api/v1/transaction');
     d.data.data.map((val)=>{
        // console.log(val._id);
        createTicket(val.text,val._id);
     })
    }catch(err){
        console.log(err)
    }
}
fetchOldData();


btn.addEventListener('click',()=>{
   try{
    let descV=desc.value;
    descV.trim();
   if(descV === '' ){
    alert('please enter Amount and Description')
   }else{
    let obj={text:descV};
    axios.post('http://localhost:5000/api/v1/transaction',obj)
    .then((resolve)=>{
        // console.log(resolve);
        createTicket(resolve.data.data.text,resolve.data.data._id);
    })
    .catch((error)=>{
        console.log(error)
    })

   }
   }catch(err){
    console.log(err)
   }
})

function createTicket(descV,ticketId){
    // console.log(uid)
  try{
    let divtag=document.createElement('div');
    divtag.classList.add('parentcont');
    divtag.innerHTML=`
                        <div class='one-ticket'>
                            <label>Desc - </label>
                            <div class="child cDesc ">${descV} </div>
                        </div>
                         <button class='delete'>Delete</button>`

    
    container.appendChild(divtag);
    desc.value='';

    // delete from ui
    let del=divtag.querySelector('.delete');
    del.addEventListener('click',async ()=>{

        await axios.delete(`http://localhost:5000/api/v1/transaction/${ticketId}`)
        .then(async (resolve)=>{
        divtag.remove();

        }).catch((er)=>{
            console.log(er);
        })

    })
  }catch(err){
    console.log(err)
  }
}
