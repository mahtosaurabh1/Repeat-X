let title=document.querySelector('#main-header');
let item=document.querySelectorAll('.list-group-item')
// let ulist=document.querySelector('#items')

// title.style.border='2px solid black';

// for(let i=0;i<item.length;i++){
//     item[i].style.color='green'
//     item[i].style.fontSize='3rem'
// } 

// item[2].style.backgroundColor='green';

// for(let i=0;i<item.length;i++){
//     item[i].style.fontWeight='bold'
// } 

// let li=document.createElement('li');
// li.classList.add('list-group-item');
// li.innerText='Item 5';
// ulist.appendChild(li)

// item[1].style.backgroundColor='green';
// item[2].style.backgroundColor='white';
// item[2].style.color='white'

// let ulist=document.querySelector('#items');
// console.log(ulist.parentNode)
// ulist.parentElement.style.backgroundColor='red'

// parentElement

// let ulist=document.querySelector('#items');
// console.log(ulist.parentElement)
// ulist.parentElement.style.backgroundColor='red'

// child element

// let ulist=document.querySelector('#items');
// console.log(ulist.childNodes)

// let ulist=document.querySelector('#items');
// console.log(ulist.children)
// ulist.children[0].style.backgroundColor='red'

// first child ele

// let ulist=document.querySelector('#items');
// console.log(ulist.firstElementChild)
// ulist.firstElementChild.style.backgroundColor='red'


// let ulist=document.querySelector('#items');
// console.log(ulist.lastElementChild)
// ulist.lastElementChild.style.backgroundColor='red'


// let ulist=document.querySelector('#items');
// console.log(ulist.nextElementSibling)
// ulist.nextElementSibling.style.backgroundColor='red'

// create Element


let ulist=document.querySelector('#items');
let li=document.createElement('li');
li.classList.add('list-group-item');
li.innerText="option 5"
ulist.appendChild(li)
