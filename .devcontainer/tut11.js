//  arrays P-1

// defining o farray:
const arr = [1,2,3,4,5,"Hello",6,7,8];
// array in JS can be of multiple data types in a single array
console.log(arr);

// cal also be defined like this: 

const arr1 = new Array(1,2,3,4,5,6,7,8,9);
console.log(arr1);

//  some basic functions of arrays:

arr.push("Sachin");
arr.push(11);
arr.push(45);
arr.push(8);

console.log(arr);

arr.unshift("Unshifted_value");
console.log(arr);
console.log(arr.includes("Unshifted_value"));

const arr2 = arr.join(); // it changes the type from array to String
console.log(arr2);