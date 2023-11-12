// Control Flow

// Conditional statements
/*
if
else-if
else
*/

/*
comparision operators:

>,<.>=,<=,

== ----> compares the value
=== ----> compares the type and value
*/

// Falsy values

/*
False
0
-0
null
undefined
Bigint
*/

// Truthy values:  -> anything inside a string will act as a truthy value

/*
"0"
True
"False"
{}
[]
*/

// Null coalesching operator : ---->  ' ?? '
//  it assures null safety

let val1 = 10??5;
console.log(val1);

let val2 = null??10; // though null was first but was not assigned
console.log(val2); 

let val3 = undefined??10; // though UNDEFINED was first but was not assigned
console.log(val2); 

// Terniary operator:

// Syntax: ---->
// condition ? true statement : false statement

