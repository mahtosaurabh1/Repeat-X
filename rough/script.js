let li=document.querySelectorAll('li');
let btn=document.querySelector('.btn')

btn.addEventListener('click',()=>{
    li[0].classList.add('green');
    li[1].classList.add('yellow')
})