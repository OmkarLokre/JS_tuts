// while-do-while loops
let i =1;
while(i<11){
    console.log(i);
    i++;
}

let arr = ["Omkar","Sachin","Ramesh","Akash"];
let ptr = 0;
while(ptr<arr.length){
   console.log( `${arr[ptr]}`);
    ptr++;
}
console.log("------------------------");
let ptr1=0;
do{
    console.log(arr[ptr1]);
    ptr1++;
}while(ptr1<arr.length)