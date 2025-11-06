  // in official documentation datatypes or categories of data is divide into two parts--primitive and non primitive
//differentiate on the basis of how the data is being stored in a memory and how can we access to that data
//  primitive    

// 7 types : string, number, boolean, null, undefined, symbols(used to make values unique BigInt )
// javascript is statically typed language it means we dont have to specify the data type while declaring a variable it will automatically assign the data type based on the value assigned to that variable
const score = 100 
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
// console.log(userEmail);
// console.log(outsideTemp);
// console.log(scorevalue);

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);


const bigNumber = 678908


// reference (non primitive )

// array, objects, functions 

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {   // storing in variables.
    name: "hitesh",
    age: 22
}

const myfunction = function(){ // here declaring function in variables.
    console.log("hello world");
}

// console.log(typeof BigNumber);
console.log(typeof outsideTemp);

typeof null  // bug in javascript it shows object but it should be null 

//********************************************************************************************************************** */


//stack memory  (Primitive type), Heap memory (Non - Primitive type)

let myYoutubename = "hitesh choudhary"

let anothername = myYoutubename
anothername = "code with stuti"

console.log(anothername);
console.log(myYoutubename);

let userone = {
  email: "user@google.com",
  upi: "user@ybl"
}

let usertwo = userone

usertwo.email = "singh@google.com"

console.log(userone.email);
console.log(usertwo.email);

