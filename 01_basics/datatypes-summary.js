//primitive

//7 types :string , Number, Bollean, null, undefined, symbol, BigInt;


//dynamically typed language  //variables are not bound to a specific data type when they are declared


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

//symbols

const id = Symbol("123")
const anotherId = Symbol("123")

//console.log(id == anotherId);

// const bigNumber = 3214567954525n


//refrences (non-primitive)

//Array, objects, functions

// const heros = ["shaktiman", "naagraj", "doga"]
// {
//     name: "Tanay";
//     age: 21;
//}

// const myFunction = function() {
//     console.log("Hello World");
// }

// console.log(typeof myFunction);

// memory

//STACK MEMORY

let myYoutubename = "agrawaltanay@gmail.com"

let anotherName = myYoutubename
anotherName ="ChaiaurCode"

//console.log(myYoutubename);
//console.log(anotherName);


//Heap (Non-Primitive)
let userOne = {
    email: "user@google.com",
    age: "21"
}

let userTwo = userOne

userTwo.email = "agrwaltanay.com"

console.log(userOne.email);
console.log(userTwo.email);





