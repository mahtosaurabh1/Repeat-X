let input=document.querySelector('.inputtag');
let decription=document.querySelector('.decription');
let filterdata=document.querySelector('.search');
let cont=document.querySelector('.list-group')
let btn=document.querySelector('.btn');


filterdata.addEventListener('keyup',(e)=>{
    let value=e.target.value;
    value=value.toLowerCase();
    var items = cont.querySelectorAll('.items');
    // console.log(items)
    for(let i=0;i<items.length;i++){
        let val=items[i].textContent.toLowerCase();
        if(val.indexOf(value) != -1){
                items[i].style.display='flex';
        }else{
            items[i].style.display='none';
        }
    }

})
btn.addEventListener('click',()=>{
    console.log(input.value);
    let value=input.value;
    let decValue=decription.value;
    let tvalue=value+" : "+decValue;
    createBox(tvalue);

})

function createBox(value){
    let divtag=document.createElement('div');
    divtag.classList.add('items')
    divtag.innerHTML=` <li class="list-group-item">${value}</li>
    <button class="delete btn-dark" >Delete</button>
    <button class="update btn-dark" >Update</button>`
    cont.appendChild(divtag)
    handleDelete(divtag);
}

function handleDelete(divtag){
    let del=divtag.querySelector('.delete');
    del.addEventListener('click',()=>{
        divtag.remove();
    })
}