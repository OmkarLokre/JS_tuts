//  Immediately invoked function expressions ---------> (IIFE)

//  So to make any function as IIFE write the whole function in a () and then add a '()' at the end of the funtcion frvlaration 
// the second () is for the execution of the function

(function printt(){
console.log("Function Called!");
})(); // now this IIFE functions need to be ended , and this can be done using a ';' .


// IIFE functions through arrow functions
(()=>{
    console.log("Through arrow function")
})();


