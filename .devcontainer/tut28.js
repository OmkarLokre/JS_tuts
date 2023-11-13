// for-each loop does not return any value to us so we cannot use for each 
// where we need ot perform any action on the elements and return that value

// so we use ' filter '

const nums=[1,2,3,4,5,6,7,8,9,10];

const ans = nums.filter((item)=>item>5);
console.log(ans);

console.log("Using ' {} '")

const ans1 = nums.filter((item)=>{ return item>5});
console.log(ans);

