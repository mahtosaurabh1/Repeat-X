// var a = 3;



// function printName(name){

// console.log(name)

// }



// printName("YAVTECH");

// console.log(a)

// var obj = {

//     age: '25',

//     findageArrowFn: () => {

//      console.log(this.age)

//     },

//     findAgeNormalFn: function(){

//      console.log(this.age)

//     }

//    }



//    obj.findageArrowFn();

//    obj.findAgeNormalFn();

// class

// class Human{
//     constructor(){
//         this.gender='male'
//     }
//    printGender(){
//         console.log(this.gender)
//     }
// }

// class Person extends Human{
//     constructor(){
//         super();
//         this.name='max'
//         this.gender='male';
//         this.age=20;
//     }

//     printMyName(){
//         console.log(this.name)
//     }
//     printmyAge(){
//         console.log(this.age)
//     }
// }

// let obj=new Person();
// obj.printGender();
// obj.printMyName();
// obj.printmyAge();


// let arr=[1,2,3];
// console.log(arr);
// let narr=[...arr,4];
// console.log(narr);

// let obj ={
//     name:"abhi"
// }

// let nobj={
//     ...obj,
//     age:20
// }
// console.log(nobj);

// // rest operator
// let fun=(...arg)=>{
//    return  arg.filter((val)=>{
//     return val === 1;
//  })
// }

// console.log(fun(1,2,3));

// destructuring
// let arr=[1,2,3];
// let [a,b,c]=arr;
// console.log(b);

// const student1 = {

//     name : 'Yash',
    
//       age: '25'
    
//     } 
    
    
    
//     function changeAge(studentObj){
    
//     studentObj.age = '30'
    
//     }
    
    
    
//     changeAge(student1)
    
    
    
//     console.log(student1.age)

// const student1 = {

//     name : 'Yash',
    
//       age: '25'
    
//     } 
    
    
    
//     function changeAge(studentObj){
    
//     studentObj.age = '30'
    
//     }
    
    
    
//     changeAge({ ...student1 } )
    
    
    
//     console.log(student1.age)

const studentArr = [

    {
    
    name : 'Yash',
    
      age: '25'
    
    },
    
    {
    
    name : 'Vaibhav',
    
      age: '23'
    
    },
    
    ]
    
    
    
    function changeAge(studentObj){
    
    studentObj.age = '30'
    
    }
    
    
    
    changeAge(studentArr[0] )
    
    
    
    console.log(studentArr[0].age)