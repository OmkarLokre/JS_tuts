console.log("Omkar")

const accountId = 12445;
let email = "omkar@gmail.com";
var accountPassword = "Omkar@2003";
city = "Thane";
let name;


/*
Prefer not to use 'var' because of issue in block scope and functional scope.
*/

// accountId = 124475;  not allowed to reassign as it is declased to be const parameter
console.log(accountId);
console.log(accountPassword);
console.log(email);
console.log(city);
console.log(name); // it will be undefined
