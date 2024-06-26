//stack and heap memory.

const obj1 = {
    name :"sainithin",
    id : 16,
    email:"someone@123"
}

const obj2 = obj1;

console.log(obj2);
obj2.name="sai";
console.log(obj1);

//Strings
let game = "spider man";
console.log(game);
console.log(game.toUpperCase());
console.log(game.toLowerCase());
console.log(game.charAt(0));//s
console.log(game.indexOf("m"));//7
console.log(game.startsWith("s"));//s
console.log(game.endsWith("n"));//n
console.log(game.length);//10
console.log(game.substring(1,7));//pider
console.log(game);

console.log(game.slice(1,7));
console.log(game);
console.log(game.splice(1,7));
console.log(game);




