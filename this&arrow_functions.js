let user = {
    username : "sainithin",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

//user.welcomeMessage();
user.username="sam";
user.welcomeMessage();
console.log(this);

//in browser the global object is window object.

function chai(){
    let username = "sainithin";
    console.log(this);
    //console.log(this.username);//run this and see
}
chai();
console.log("------------------------------------------");
const chai1 = ()=>{
    const username = "sainithin";
    console.log(this);
    console.log(this.username);
}
chai1();

const addTwo = (num1,num2)=>{
    return num1+num2;//if we use curly braces then we have to write return statement.
}
console.log(addTwo(3,4));

const mulTwo = (num1,num2)=>num1*num2;//no need of return staement when there is no curly braces.we can close like this also (num1+num2);
console.log(mulTwo(3,4));

//returning an object using arrow function
const obj = ()=>({username:"sainithin",id:16});
console.log(obj());

//IMMEDIATLY INVOKED FUNCTION EXPRESSION(IIFE)

(function chai(){
    //named iife
    console.log("DB CONNECTED");
})();//after every iife semicolon(;) is must to avoid some errors.

(()=>{console.log("db connected1");})();//this is a simple iffe or unnames iife ,and there will be a named iife;

((name)=>{
    console.log(`hi, ${name}`);
})('sainithin');

