// declaring variables-> multiple ways to do this
const accountId = 144553
let accountEmail = "devarajv@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

let accountState;
// does not if you prove a semi column or not, as js considers both as same


// accountId = 2 this action is not allowed as accountId variable is declared as constant (not changeable)


accountEmail = "he@hc.com"
accountPassword = "123321"
accountCity = "Bengaluru"

// print output
console.log(accountId);

// another way to print output for muliple variables at the same time
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
NOTE:-
1. prefer not to use var because of the issues in block scope and functional scope
2. also prefer not to define a variable by not mentioning any keyway as is the case in line no 5
3. If a variable is defined but value is not assigned then js consider it as having value = undefined
4. Always remember to define a variable only in the form of const or let
*/

