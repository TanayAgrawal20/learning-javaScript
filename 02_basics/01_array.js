//array

const myArr = [0,1,2,3,4,5]
const myHeros = ["Shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[8]);

//array methods

// myArr.push(6) //add the elements in last
// myArr.push(7) 
// myArr.pop() //remove the last element

// myArr.unshift(9)  //add the elements in the start
// myArr.shift()     // remove the elemnts

// console.log(myArr.includes(9));  //check the elements
// console.log(myArr.indexOf(3));

const newArr = myArr.join() //convert the elements into string

// console.log(newArr);

// console.log(myArr);


//slice ,splice

console.log("A", myArr);
const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("C",myArr);  //changes in original array

console.log(myn2);








