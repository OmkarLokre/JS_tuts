// for of

const arr = [1,2,3,4,5];

for (const ptr of /*(object)*/ arr) {   // here the object does not refers to the object of the javascript but is asking that loop shuld be implemented on what? he we have to implelemnt it on our above array arr
    console.log(ptr);
}
const arr1 = ["Omkar","Sachin","Ramesh","Akash"];

for (const ptr of /*(object)*/ arr1) {   // here the object does not refers to the object of the javascript but is asking that loop shuld be implemented on what? he we have to implelemnt it on our above array arr1
    console.log(ptr);
}

// Maps

const map = new Map();
map.set('IN',"India");
map.set('USA',"America");
map.set('BR',"Brazil");
map.set('RSA',"South Africa");
map.set('CHI',"China");

//  ways to print key and values in map using for-of loop

for (const [key,value] of map) {
console.log(key," :- ", value)    
}

// we cannot iterate objects using for-of loop