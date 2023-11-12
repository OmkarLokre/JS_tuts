// nesting objects:

const obj1 = {
    fname:{
     fullname:{
        firstname:"Omkar",
        lastname:"Lokre"
     }
    },
    age:24,
    location:"Thane"
}

console.log(obj1.fname.fullname);

// Merging objects:

// using assigns keyword

const object1 = {1:'a',2:'b'}
const object2 = {3:'c',4:'d'}

const merged_obj = Object.assign(object1,object2);
console.log(merged_obj);

// using the spread method -> {... / ...}

objects = {...object1,...object2}
console.log(objects);

console.log(`The keys are: ${Object.keys(object1)}`);
console.log(`The values are: ${Object.values(object1)}`);
console.log(`The Enteries are: ${Object.entries(object1)}`);