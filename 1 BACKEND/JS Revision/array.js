// let arr=['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];

// let newarr=arr.map((val)=>{
// if(val === ' '){
//     return 'empty string'
// }else{
//     return val;
// }
// })

// console.log(newarr);

// const obj1 = {'key1': 1}

// const obj2 = { ...obj1}

// if(obj2 === obj1){

// console.log('same objects')

// }

// else{

// console.log('different objects')

// }

// const obj1 = {'key1': 1 , 'key2' : 2}

// const obj2 = { ...obj1, key1: 1000}



// console.log(obj1)

// console.log(obj2)

// destructuribg
// const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

// const { key1, key3} = { ...obj1}



// console.log(key1, key3)

// const arr1 = ['value1', 'value2']

// const [ val1, val2 ] = arr1



// console.log(val1)

// console.log(val2)

// const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

// let { key1, key3} = obj1



// key1 = 20;

// key3 = 123

// console.log(obj1.key1, obj1.key3)

// console.log('a');

// console.log('b');



// setTimeout(() => console.log('c'), 3000)

// console.log('d');

// console.log('a');

// console.log('b');

// // setTimeout(() => console.log('c'), 3000)

// setTimeout(() => console.log('d'), 0)


// console.log('e');

let  fetchData =()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },1500)
    })
}

setTimeout(()=>{
fetchData().then((text)=>{
    console.log('a')
    return fetchData();
}).then((a)=>{
    console.log('b');
    return fetchData();
}).then((a)=>{
    console.log('c');
    return fetchData();
}).then((a)=>{
    console.log('d');
    return fetchData();
}).then((a)=>{
    console.log('e');
    return fetchData();
})
},2000)
