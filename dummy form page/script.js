let name=document.querySelector('.name')
let email=document.querySelector('.email')
let phno=document.querySelector('.phno')
let date=document.querySelector('.date')
let time=document.querySelector('.time')
let btn=document.querySelector('.btn')

btn.addEventListener('click',()=>{
    console.log("name is ->"+name.value)
    console.log("email is ->"+email.value)
    console.log("phone number is ->"+phno.value)
    console.log("Date is ->"+date.value)
    console.log("Time is ->"+time.value)
})