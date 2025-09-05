const name = "Tanay"
const repoCount = 50

//console.log(name + repoCount + " value");

//console.log(`Hello my name is ${name} and my repCount is ${repoCount}`);

const gameName = new String("Tanay")

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));  //to find what is present at index2
// console.log(gameName.indexOf("n"));

// substring
const newString  = gameName.substring(0 , 4)  //always consider starting with zero 
// console.log(newString);


// slice 
const anotherString = gameName.slice(-4, 4)
console.log(anotherString);

//remove the whitespaces
const newStringOne ="  Tanay "
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace("%20", "-"));


//present or not

console.log(url.includes("hitesh"));


console.log(gameName.split(""));







