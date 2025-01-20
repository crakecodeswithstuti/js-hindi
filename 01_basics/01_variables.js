const accountId = 144553 
let accountEmail = "stuti@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
 
// accountId = 2 // not allowed

accountEmail = "st@uti.com"
accountPassword = "122121212"
accountCity =  "Goa"
let accountState;

console.log(accountId);


/*
prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

