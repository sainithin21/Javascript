//singleton(Object.create)

//object literals

const mySym = Symbol("key1");

const jsUser = {
    name : "sai nithin",
    "full Name": "BANDI SAI NITHIN",
    //mySym : "myKey1",->this gives the String
    [mySym] : "myKey1",
    age  : 18,
    location : "telangana",
    email : "sainithin123@gmail.com",
    isLoggedIn : false,
    lastLoggedInDays : ["monday",'wednesday']
}
console.log(jsUser.email);
console.log(jsUser['email']);
//console.log(jsUser.full Name);
console.log(jsUser['full Name']);
console.log(jsUser["mySym"]);
//console.log(typeof jsUser.mySym);//it is a string but not Symbol.
console.log(typeof jsUser[mySym]);
console.log(typeof mySym);

jsUser.email = "sainithin@456@gmail.com";
console.log(jsUser);
//Object.freeze(jsUser);
jsUser.email = "sainithin@987@gmail.com";
console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");
}

console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser);

jsUser.greetingTwo = function(){
    console.log(`hello js user ${this.name}`)
}
console.log(jsUser.greetingTwo());

//objects part-2

const tinderUser2 = new Object();//singleton-object
console.log(tinderUser2);

const tinderUser = {};//non-singleton object.
console.log(tinderUser);

tinderUser.id="abc123";
tinderUser.name = "robert";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
    email:"someone@123gmail.com",
    name:{
        userFullName:{
            firstName : "SAI NITHIN",
            lastName:"BANDI"
        }
    }
}

console.log(regularUser.name.userFullName.firstName);

//merging of objects.
const obj1 = {1:"a",2:"b"};
const obj2 = {3:"c",4:"d"};
const obj3 = {obj1,obj2};
console.log(obj3);
const obj4 = Object.assign(obj1,obj2);
console.log(obj4);

const obj5 = Object.assign({},obj1,obj2);// same ans as above but good syntax,if we dont give this ,then all 
//the objects are storing in obj1;
console.log(obj5);

const obj6 = {...obj1,...obj2};
console.log(obj6);

//array of objects

const users =[
    {
        id:"a1",
        email:"sai@gmail.com"
    },
    {
        id:"a2",
        email:"sai2@gmail.com"
    }
]
console.log(users[0]['id']);
console.log(users[0].id);
console.log(typeof users[0].id);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//objects distruction and JSON API
const course = {
    name:"js course",
    price:999,
    courseInstructor : "sai nithin"
}

console.log(course.courseInstructor);

const {courseInstructor} = course;
console.log(courseInstructor);

const {courseInstructor: instructor} = course;
console.log(instructor);

//JSON(JavaScript Object Notation)

{
    'name' : "sai nithin",
    'course': "js",
    'price' : "free"
}

//end.






