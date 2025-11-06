 "use strict";// treat all JS  code as newer version 

//alert("3 + 3") //we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high 

console.log("stuti")

let name = "stuti"
let age = 20
let isLKoggedIn = false


// primitive data type /
// number => 2 to power 53
// bigint 
// string =>""
// boolean => true/false
// null => standlone value
// undefined =>
// symbol => unique
//bigInt 
// reference data type/non primitive data type / complex data type
// array 
// function
// object  

// Javascript is a dynamically typed language
//typescript is a statically typed language 
 
const score:number = 100 // number define
const scoreValue = 100.3 // number define
const isLoggedIn = false // boolean
const outsideTemp = null // null
let userEmail; // undefined


console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof 33); // number
console.log(typeof 3.4); // number
console.log(typeof "stuti");// string
console.log(typeof true);// boolean
console.log(typeof BigInt(33)); //bigint
console.log(typeof Symbol("stuti")); // symbol
console.log(typeof [1,2,3,4]); // object
console.log(typeof {name:"stuti", age:20}); // object
console.log(typeof function(){}); // function


// JS is a case sensitive language
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);






