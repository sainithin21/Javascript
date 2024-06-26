const coding = ['js','java','ruby','python','cpp'];
const values = coding.forEach((item)=>{
    console.log(item);
})
console.log(values);

// foreach will not return 
// filter will return

const nums = [1,2,3,4,5,6,7,8,9,10];
const myval = nums.filter((item)=>item>4);
console.log(myval); 

const myval2 = nums.filter((item)=>{
    return item>6;//return is imp ,if we using curly braces;
});

const newnums = nums.map((num)=>num+10);
console.log(newnums);

const newnums2 = nums.map((num)=>{num+10});//use return in curly braces
console.log(newnums2);

//chaining

const newnums1 = nums.map((num)=>num*10).map((num)=>num+1);
console.log(newnums1); 

const newnums3 = nums.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>40);
console.log(newnums3); 

//reduce.

const n = [1,2,3];
const req = n.reduce(function (acc,curr){
    console.log(`acc:${acc} , curr:${curr}`);
    return acc+curr;
},0);// 0 is the value of initial accumilator,it can be any value.
console.log(req);

const req2 = n.reduce((acc,curr)=>(acc+curr),0);
console.log(req2);

const shoppingCart = [
    {
          course:'java',
          price : 5000
    },
    {
        course:'python',
        price : 5000
  },
  {
    course:'dsa',
    price : 7000
},
{
    course:'web',
    price : 10000
}
]

const vals = shoppingCart.reduce((acc,curr)=>(acc+curr.price),0);
console.log(vals);