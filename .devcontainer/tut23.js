// iterations

// For loop

for (let i=0;i<10;i++){
    console.log(i);
}
for (let i=0;i<11;i++){
    for (let j=0;j<11;j++){
        console.log(`j=${j} , for i: ${i}`);
    }
}

// break and continue

for (let i=1;i<=20;i++){
    if(i==7){
        break; // here the compiler slipped what was written in the if block and moved outside
    }
    console.log(`Value of i: ${i}`);
}
console.log(`Value has reached 7`);
for (let i=1;i<=20;i++){
    if(i==7){
        continue; // here the compiler skipped what was written in the if block and moved outside and continued
    }
    console.log(`Value of i: ${i}`);
}
console.log(`Value has reached 7`);