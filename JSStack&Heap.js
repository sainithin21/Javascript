//stack and heap memory
//stack->primitive data types
//heap->non-primitive-data types

// for primitive datatypes duplicate copy is formed.
// let myYtbName = "snofficial";
// let newChannel = myYtbName;
// newChannel="friendlyThings";
// console.log(myYtbName);
// console.log(newChannel);

// for non _ primitive dataTypes.

// let userOne = {
//     userid: "123",
//     upi:"xyz@upi"
// }

// let userTwo = userOne;

// console.log(userOne);
// console.log(userTwo);
// userTwo.userid="456";
// console.log(userOne);

// // Strings
// const name = "sai nithin";
// const repoCount = 100;

// console.log(name+" "+repoCount+" value");
// console.log(`my name is ${name} and my repo count is :${repoCount}`);

// const gameName = new String("truck driving simulator");
// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.endsWith("or"));
// console.log(gameName.startsWith("tr"));
// console.log(gameName.charAt(0));
// console.log(gameName.indexOf('t'));
// console.log(gameName.substring(0,5));//cannot give -ve values here.
// console.log(gameName.slice(-8,4));// can give -ve values.
// const val = "  sai   ";
// console.log(val);
// console.log(val.trim());
// const val2 = "sai%20Nithin";
// console.log(val2.replace("%20",' '));
// console.log(val2.includes("sai"));
// console.log(name.split(" "));

// // maths and numbers in js

// const score = 400;
// const name = "sai";
// console.log(typeof name);
// const balance = new Number(100);
// console.log(typeof(balance));
// console.log(typeof(score));
// console.log(balance);
// console.log(balance.toString().length);
// console.log(typeof(balance));
// console.log(balance.toFixed(2));

// const num = 123.8965;
// console.log(num.toPrecision(3));
// console.log(num.toPrecision(2));
// console.log(num.toPrecision(4));

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_SAFE_INTEGER);

// //*************maths****************/
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3));//4
console.log(Math.round(4.5));//5
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(2,8,3,9));
console.log(Math.max(2,3,4,5));
console.log(Math.random());
console.log((Math.random()*10)+1);
console.log((Math.random()*10)+1);

const min = 10;
const max = 20;

 console.log(Math.floor(Math.random()*(max-min+1)+min));

// //upto numbers.
// //end.