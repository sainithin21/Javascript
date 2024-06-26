//variables

var a = 10;
var b = 20;
var c = " sai nithin";
console.log(a+b+c);
console.log(typeof a,typeof b,typeof c);

{
    let a = 2;
    console.log(a);
}
console.log(a);

let p = 10;
let q = 20.56;
let r = "sai nithin";
let m = true;
let n = null;//null is of object type.
let o = undefined;
console.log(p,q,r,m,n,o);
console.log(typeof p,typeof q,typeof r,typeof m,typeof n,typeof o);

let obj = {
    name:"sainithin",
    age :21,
    email:"sainithin@123gmail.com"
}
console.log(obj.name);
console.log(obj.age);
console.log(obj.email);

var z;//--------->imp-----------------
let y;
//const x;
//console.log(x);
console.log(z);
console.log(y);//----------------------------------

const obj1= {
    name : "sainithin",
    id : 16,
    email : "me@123"
}

for(const c of "sainithin"){
    console.log(c);
}

//---------------------------------important-----------------------------
console.log('2'>1);
console.log('1'>2);
console.log('1'>'2');

console.log(null>0);
console.log(null==0);
console.log(null<0);
console.log(null>=0);

console.log(undefined>0);
console.log(undefined==0);
console.log(undefined<0);
//------------------------------------------------------------------------------

//dataTypes conversion
let val = "33";
let valInNum = Number(val);
console.log(typeof valInNum);
console.log(valInNum);

let val2 ="33abc";
let valInNum2 = Number(val2);
console.log(typeof valInNum2);
console.log(valInNum2);//NaN

// let a1 = 1;
// let valInBool = Boolean(a1);
// console.log(valInBool);
// console.log(typeof valInBool);

// let st = "ee";
// let valInBool2 = Boolean(st);
// console.log(valInBool2);
// console.log(typeof valInBool2);

let num = 33;
let strNum = String(num);
console.log(typeof strNum);
console.log(strNum);

