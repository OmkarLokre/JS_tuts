// singleton

// object literals:

// singleton declaration
const obj2 = new Object();  

// defining and declaring objects:
// non-singleton declaration
const obj1 = {
    name:"Omkar",
    age:14,
    location: "Thane",
    isLoggedIn:false
}

// accessing objects:

// 1) ->
console.log(obj1.age);
// 2) ->
console.log(obj1["age"]);

// for using Sybols in objects -> declare and define ity as [Symbol_name] = value; inside the object;

// functions for objects

obj1.greeting=function(){
    console.log("GOod Morning")
}

console.log(obj1.greeting());
