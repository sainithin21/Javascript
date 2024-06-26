
// let month = 3;
// switch(month){
//     case 1:
//         console.log("jan");
//         break;
//     case 2:
//         console.log("jan");
//         break;
//     case 3:
//         console.log("mar");
//         break;
//     case 4:
//         console.log("jan");
//         break;
//     default :
//         console.log("default case");
//         break;            
// }

// const username = "";//instead of string ,if i pass empty array '[]' then it shows as true;
// if(username) console.log(username);
// else console.log("no username");

//fasly values
// false,0, -0 ,in BigInt 0n ,"",null,undefined,NaN;

//other then this all are truthy values;

//some examples of truthy values.
// "0","false"," ",[],{},function(){}...etc.

// const arr = [];

// if(arr.length===0){
//     console.log("empty array");
// }

// const obj = {};

// if(Object.keys(obj).length===0){
//     console.log("empty object");
// }

// console.log(false==0);
// console.log(false=='');
// console.log(''==0);

// //nullish coalescing operator (??): null undefined;

let val1=1;
console.log(val1);
val1 = 5??10;
console.log(val1);

val1 = null ?? 10 ;
console.log(val1);

val1 = undefined ?? 15;
console.log(val1);

val1 = null ?? 25 ?? 30;
console.log(val1);

val1 = null ?? 30 ?? 25;
console.log(val1);

// //ternary operator.

// //loops
// //basic for-loop and break and continue
// //loops on arrays basic....watch in video
// //basic while loop and do while loop

// //for-of loop

// let arr1 = [1,2,3,4,5];

// for (const num of arr1) {
//     console.log(num);
// }

// const greeting = "good mrg";

// for(const num of greeting){
//     console.log(num);
// }

// const map = new Map();//doublicate entries are not allowed.
// map.set('IN','INDIA');
// map.set('USA','UNITED STATES OF AMERICA');
// console.log(map);

// for(const key of map){
//     console.log(key);
// }

// for(const [key,value] of map){
//     console.log(key+":="+value);
// }


