let arr = [1,2,3,'win','sai'];
console.log(arr);

//deleting the element
//delete arr[4];
console.log(arr);
console.log(arr.length);

let a1 = [1,2,3];
let a2 = [4,5,6];
let a3 = [7,8,9];
let a4 = a1.concat(a2,a3);
console.log(a4);

let notNums = arr.splice(3,2);
console.log(notNums);

let a = [1,93,4,5,88];
a.forEach((value,index,array)=>{
    console.log(value,index,array);
})

//for in loop
let obj = {
    a:1,
    b:2,
    c:3
}

for(const key in obj){
    if(Object.hasOwnProperty.call(obj,key)){
        const element = obj[key];
        console.log(key,element);
    }
} 

for(const iterator of arr){
    console.log(iterator);
}

let ar = [1,13,5,7,11]
// let newArr = [];
// for(let i=0;i<ar.length;i++){
//     newArr.push(ar[i]**2);
// }
// console.log(newArr);

// let newArr = ar.map((e)=>{
//     return e**2;
// })
// console.log(newArr);

const greaterThanSeven=(e)=>{
    if(e>7)
    return true;
    return false;
}
console.log(ar);

console.log(ar.filter(greaterThanSeven));

const red = (a,b)=>{
    return a*b;
}

console.log(ar.reduce(red));
console.log(Array.from("sainithin"));



