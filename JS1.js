console.log("i am sainithin");
var a = 10;
var b = 20;
var c = "sai nithin";
console.log(a+b);
console.log(c);
console.log(typeof a,typeof b,typeof c);

a=a+1;
console.log(a);//11;
// const a1=20;
// a1=a1+3; cannot be done.becoz this is a constant variable which cannot be changed;
// console.log(a1);

console.log(a);

{
    let a=100; //let keyword is accessed only in block of code.var can be accessed globally.
   console.log(a);
}
console.log(a);

let x="sai nithin";
let y=20;
let z = 30.556;
const p=true;
let q = undefined;
let r = null;

console.log(x,y,z,p,q,r);
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r);

//object data type
let o={
    "name":"sai nithin",
    "job":"fullstack devloper",
    "is_pro":true
}
console.log(o);
o.salary="10crore";
console.log(o);

//conditionals in javaScript
let age=20;
if(age>18){
    console.log("you can vote");
}
else{
    console.log("you cannot");
}

// arithmatic operators in js
console.log(2**3);
console.log(3%2);
// assignment operators a+=b,a-=b,a*=b,a**=b.....;
//comparison operators
console.log("3"==3);//true
console.log("3"===3);//false checks type also.

//logical operators. && , || , !

//if else ladder
age1=20;
if(age1<=12){
    console.log("children");
}
else if(age1>=13 && age1<=19){
    console.log("teenager");
}
else if(age1>=20 && age<=50){
    console.log("adult or middle aged");
}
else
console.log("senior citizen");

let m=8;
let n=6;
console.log(m>n?m-n:n-m);

for(const key in o){
    const element =o[key];
    console.log(key,element);
}

for(const c of "sainithin"){
    console.log(c);
}