// There are two types of memory: 

/*
Stack
Heap
*/

// Primitive datatypes are assinged in stack
// Referenced datatypes are assigned in heap

let name1 = "Omkar";
let name2= name1;
name2 = "Sachin"; // name is assigned with a copy of name1

console.log(name1);
console.log(name2);   // SO here even after changing name in name2 it did not affect the value in name1
// because name2 was assigned a copy of name1 and not dirct reference

// But in case of heap memory , the entire object is referenced

let name3 ={
    age:21,
    gender : "male"
}
let name4 = name3;

name4.age=15; // here the age in name3 is also changed

console.log(name3.age); 