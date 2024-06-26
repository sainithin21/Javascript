//dates

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(myDate.toISOString());
// console.log(typeof(myDate));

 let myNewDate = new Date(2023,0,23);
// console.log(myNewDate.toDateString());
// console.log(myNewDate.toString());

// let myNewDate1 = new Date(2023,0,23,5,3);
// console.log(myNewDate1.toLocaleString());

// let myNewDate2 = new Date(2023,0,23,22,3,16);
// console.log(myNewDate2.toLocaleString());

// let myNewDate3 = new Date("2023-01-21");
// let myNewDate4 = new Date("01-14-2023");
// console.log(myNewDate3.toLocaleString());
// console.log(myNewDate4.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myNewDate.getTime());
console.log(Date.now());
console.log(Math.floor(Date.now()/1000));

// let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

// newDate.toLocaleString('default',{
//     weekday:"long"
// })

// //arrays
// const myArr = [1,23,4,5];
// //js arrays are re-sizable.
// console.log(myArr[0]);
// const arr2 = new Array(1,2,3,4,5);
// console.log(arr2[0]);
// console.log(arr2.length);

// // array-methods.
// arr2.push(8);// will be added at the last.
// console.log(arr2);
// arr2.push(9);
// console.log(arr2);
// arr2.pop();// will be poped from last.
// console.log(arr2);
// arr2.unshift(10);
// console.log(arr2);
// arr2.shift();
// console.log(arr2);

// const newArr=myArr.join();
// console.log(myArr);
// console.log(newArr);

// //slice , splice
// console.log("*****************");
// console.log(myArr);
// console.log("*****************");
// const myar1=myArr.slice(1,3);
// console.log(myar1);
// console.log(myArr);
// console.log("*****************");
// const myar2 = myArr.splice(1,3);
// console.log(myar2);
// console.log(myArr);
// console.log("*****************");

// const marvel_heros = ["spiderman","ironman","thor","captain-America"];
// const dc_heros=["batman","superman","flash"];

// // marvel_heros.push(dc_heros);
// // console.log(marvel_heros);
// // console.log(marvel_heros[4][1]);

// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);

// const all_new_heros = [...marvel_heros,...dc_heros];//spreading 
// console.log(all_new_heros);
 
// const arr = [1,2,3,[4,5],6,[7,8,[9,10]]];

// const new_arr = arr.flat(2);
// console.log(new_arr);

// //end.