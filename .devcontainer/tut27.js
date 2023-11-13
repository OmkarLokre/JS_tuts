// for-each loop

const arr = ["Omkar","Sachin","Ramesh","Akash"];

// syntax variation 1:

// array.forEach( function(item) {
    // condition
// }) 
console.log("Using standard method");
arr.forEach( function(item) {
    console.log(item);
})

// syntax variation 2: using arrow function
// array.forEach( () => {
    // condition
// }) 
console.log("Using arrow function");
arr.forEach( (item) => {
    console.log(item);
})

// syntax variation 2: using our own function ----> just call the function we created in the forEach ---> but no defyining of the function inside forEach loop allowed
// array.forEach(function_name)

function print(val){
    console.log(val);
}
console.log("Using our own function");
arr.forEach( print);

// syntax variation 2: Printing the index and entire array too in each iteration
console.log("Printing the index and entire array too");
arr.forEach( (item,index,arr) => {
    console.log(item,index,arr);
})

// most imp ----> how to acess objects in an array using for-each loop

const obj  = [
    {
        language:"C++",
        coder:"Sachin"
    },
    {
        language:"java",
        coder:"Omkar"
    },
    {
        language:"JavaScipt",
        coder:"Soham"
    },
    {
        language:"C",
        coder:"Sarthak"
    }
]
console.log("---------------------------------------------------------");

obj.forEach((items)=>{
    console.log(items.language)
})
console.log("---------------------------------------------------------");

obj.forEach((items)=>{
    console.log(items.coder)
})