let input=document.querySelector('.form-control');
let cont=document.querySelector('.list-group')
let btn=document.querySelector('.btn');

btn.addEventListener('click',()=>{
    console.log(input.value);
    let value=input.value;
    let divtag=document.createElement('div');
    divtag.classList.add('items')
    divtag.innerHTML=` <li class="list-group-item">${value}</li>
    <button class="delete btn-dark" >Delete</button>
    <button class="update btn-dark" >Update</button>`

    cont.appendChild(divtag)
    handleDelete(divtag);

})

function handleDelete(divtag){
    let del=divtag.querySelector('.delete');
    del.addEventListener('click',()=>{
        divtag.remove();
    })
}