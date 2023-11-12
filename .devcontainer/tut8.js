//  String

let str="hello"+" World ";
let b = 9;
let c = true;

console.log(str+b+c); // but this is an old method to write!

//  Instead use a back-tick : ` `;

console.log(`Hello, my first string is :${str} and my second variable is ${b} and the third one is: ${c}`);

// NOw string is not an array but we can access its index values by keys and value like for eg:
// at key(index: 0)->value(char at index 0);

console.log(str[4]);

//  Some basic functions of String:

console.log(str.length);
console.log(str.charAt(7));
console.log(str.substring(3,8));
console.log(str.slice(-3,8)); // difference between slice and substring is that in slice we can give negative values

const newStr = "    Omkar       "
console.log(newStr.trim());
 const url = "https://scaling-telegram-g4qx4q5jvwvwcvrr.github.dev/";
 console.log(url.replace('https://scaling-telegram-g4qx4q5jvwvwcvrr.github.dev/','omkar.com'));