let Uname=document.querySelector('.name')
let email=document.querySelector('.email')
let container=document.querySelector('.container')
let btn=document.querySelector('.btn')
let mbno=document.querySelector('.mbno');



async function  fetchOldData(){
    let d= await axios.get('https://crudcrud.com/api/c48ffc4d81ac4d6bb60749a9b90a986b/appointment');
     d.data.map((val)=>{
        // console.log(val._id);
        createTicket(val.n,val.e,val.mn,val._id);
     })
}
fetchOldData();

btn.addEventListener('click',()=>{
    let n=Uname.value;
    n.trim();
    let e=email.value;
    e.trim();
    let mn=mbno.value;
   if(n === '' || e === '' || mn==''){
    alert('please enter name and email and mobile number')
   }else{
       let obj={n,e,mn};
        axios.post('https://crudcrud.com/api/c48ffc4d81ac4d6bb60749a9b90a986b/appointment',obj)
        .then((resolve)=>{
            createTicket(resolve.data.n,resolve.data.e,resolve.data.mn)
            console.log(resolve.data)
        })
        .catch((error)=>{
            console.log(error)
        })
   }
})

async function createTicket(n,e,mn,id){
    // console.log(uid)
    let divtag=document.createElement('div');
    divtag.classList.add('parentcont');
    divtag.innerHTML=`<div class="child cName">${n}</div>
                        <div class="child cEmail ">${e} </div>
                        <div class="child cPhno" > ${mn}</div>
                         <button class='delete' onclick='handleRemove(${id})'>Delete</button>
                         <div class='update'  ><i class="fa fa-lock"></i></div>`

    
    container.appendChild(divtag);
    Uname.value='';
    email.value='';
    mbno.value='';

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
            let updObj={"n":cName.textContent,"e":cEmail.textContent,"pn":cPhno.textContent}
            axios.put(`https://crudcrud.com/api/c48ffc4d81ac4d6bb60749a9b90a986b/appointment/${id}`,updObj)
        }
    })

    // delete from ui
    let del=divtag.querySelector('.delete');
    del.addEventListener('click',()=>{
        divtag.remove();
    })

}

async function handleRemove(id){
    let a=await  axios.delete(`https://crudcrud.com/api/c48ffc4d81ac4d6bb60749a9b90a986b/appointment/${id}`)
    console.log(a)
}


