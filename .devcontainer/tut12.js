// arrays P-2

const arr = ["Omkar","Sachin","Supriya"];
const arr1 = ["Jphn","Ramesh","Sam"];

console.log(arr.push(arr1));
console.log("----------------------------------------------------------");
console.log(arr.concat(arr1));

// Above both functions does not concatenate the Strings perfectly , it just adds the whole arr1 as an element in the arr
// like -> array in a array

//  we can use 'spread function' it is used as ... before arr1 and ... before arr2

// Eg:
console.log("----------------------------------------------------------");
const new_arr = [...arr,...arr1];
console.log(new_arr);

// array in a array in array situation
//  use flat function -> it concatenates all the subarray elements into a single array

const array = [1,2,3,[2,4,5],["OMkar","Sachin",[9,80,23]]];
console.log(array.flat(Infinity));

//  for data scrapping , i.e to convert any data into an array: we use 'Array.from(Source)'
  
console.log(Array.from("Omkar"));