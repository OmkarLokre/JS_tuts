// Scope

//   we avoid using var as it does only follows the scope and violated the global scope rule

let a=10;
var b =100;

if(true){
    let a=22;
    var b =10;
}
console.log(a);
console.log(b); // this is printing 
// the output of b that is assigned to 
// it in the scope instead it should have printed 
// what is there in the global scope

