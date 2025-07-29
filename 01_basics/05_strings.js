const name = 'Dev'
const repoCount = 50

console.log(name + repoCount + 'Dudu')  
/*nobody writes this way in modern days and everybody uses backticks (where we can use string interpolation. Here we will have place holders where we can directly inject the variables)*/

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
/* this is called string interpolation and has got multiple benefits.
    - better
    -readable
    - can apply methods like toupper or etc. inside the {}
*/

// alternate way of initializing the string:
const gameName = new String('Devhc')
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase()) /*this operation does not change our original string as these strings are stored in stack memory.*/

