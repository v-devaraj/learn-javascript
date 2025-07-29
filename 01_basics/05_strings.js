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
const gameName = new String('Dev-hc')
console.log(gameName[0])
console.log(gameName.__proto__) // Ans is {}
console.log(gameName.length)
console.log(gameName.toUpperCase()) /*this operation does not change our original string as these strings are stored in stack memory.*/

// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('v'))

// const newString = gameName.substring(0, 4)
// note that the end index is excluded.

// console.log(newString)

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

/* trim and replace method */
const newStringOne = '   Dev   '
console.log(newStringOne)
console.log(newStringOne.trim())
console.log(newStringOne.replace('De', 'Ar'))
console.log(newStringOne.replace('De', 'Ar').trim())
console.log(gameName.split('-'))    // using split method in strings
console.log(gameName.split('-'))