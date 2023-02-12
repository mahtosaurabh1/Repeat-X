let desc=document.querySelector('.desc')
let container=document.querySelector('.container')
let btn=document.querySelector('.btn');
let mcont=document.querySelector('.main-cont');



async function  fetchOldData(){
    try{
        let d= await axios.get('http://localhost:5000/api/v1/product');
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
    axios.post('http://localhost:5000/api/v1/product',obj)
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
                            <label>P. Name - </label>
                            <div class="child cDesc ">${descV} </div>
                        </div>
                         <button class='delete'>Delete</button>
                         <div class='update'  ><i class="fa fa-lock"></i></div>`

    
    container.appendChild(divtag);
    desc.value='';

    // update
    let update=divtag.querySelector('.update i');
    let cName=divtag.querySelector('.cDesc');
    update.addEventListener('click',()=>{
        if(update.classList.contains('fa-lock')){
            update.classList.remove('fa-lock');
            update.classList.add('fa-unlock');
            cName.setAttribute('contenteditable','true');
        }else{
            update.classList.remove('fa-unlock');
            update.classList.add('fa-lock');
            cName.setAttribute('contenteditable','false');
           

            let updObj={"text":cName.textContent}
            console.log(updObj)
            axios.put(`http://localhost:5000/api/v1/product/${ticketId}`,updObj)
        }
    })


    // delete from ui
    let del=divtag.querySelector('.delete');
    del.addEventListener('click',async ()=>{

        await axios.delete(`http://localhost:5000/api/v1/product/${ticketId}`)
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
