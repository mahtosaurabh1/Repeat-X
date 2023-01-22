let title=document.querySelector('#main-header');
let item=document.querySelectorAll('.list-group-item')

title.style.border='2px solid black';

for(let i=0;i<item.length;i++){
    item[i].style.color='green'
    item[i].style.fontSize='3rem'
} 

