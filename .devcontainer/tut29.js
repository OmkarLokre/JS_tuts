const nums = [1,2,3,4,5,6,7,8,9,10];

// const res = nums.map((nums)=>nums+10);
// console.log(res);

// chaining -----> using 2,3 maps and then filter and so on ....

const res = nums.map((nums)=>nums*10).map((nums)=>nums+10).filter((nums)=>nums>=50);
console.log(res);

