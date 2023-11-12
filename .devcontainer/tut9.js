// // Number and maths

// let a = 100;
// let b = new Number(200);

// console.log(a);
// console.log(b);

// // SOme functions of the Number class

// console.log(a.toString.length);
// let c=23.4567;

// let val = 10000000000;
// console.log(val.toLocaleString('en-In'));

// // This will give the maximum number value it can stored inside the 'NUMBER' primitive
// console.log(Number.MAX_SAFE_INTEGER);

// Some Math library functions

console.log(Math.round(23.678))
console.log(Math.random()*10); // gives the number between 0 and 1 so we multiply it with 10
console.log(Math.abs(-7)); // changes negative vlaue to a positve value
console.log(Math.ceil(4.2)); // takes the closest upper value 
console.log(Math.floor(4.2))// takes the closest lower value

//  to generate a random number between two values; 
const min =10;
const max =20;

console.log(Math.floor(Math.random()*(max-min))+min);