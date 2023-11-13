// reduce

// so in reduce there is accumulator and current value.
// the current value is basically the current element of the array 
// the accumulator is nitally the value whoch e=we provide it with and then it is basically the return value that we perform
// the accumulator stores the value at each iteration and then the modified value of the acul=mulator is itsekf y=used in the function in each iteration

const nums = [1,2,3,4,5,6,7,8,9];

const res = nums.reduce(function(acc,currentval){
    
    console.log(`accumulator: ${acc} and currentValue: ${currentval}`);
    return acc=acc+currentval;
},0)

console.log(res);

console.log("Using Arrow function");

const res1 = nums.reduce((acc,currentVal)=>acc+currentval
,0)