//++++++++++++NUMBERS++++++++++++

const score = 400
// console.log(score)

const balance = new Number(100)
// console.log(balance)
// console.log(balance.toString()) //became string
// console.log(balance.toString().length) //length of the string
// console.log(balance.toFixed(2)) //Fix a precision value

const otherNumber = 1123.8966
//console.log(otherNumber.toPrecision(3)) //return a string

const hundreds = 1000000
//console.log(hundreds.toLocaleString())  // In US std.
//console.log(hundreds.toLocaleString('en-IN'))  // In Indian std.


//++++++++++++MATH++++++++++++++++
// console.log(Math.abs(-4))
// console.log(Math.round(2.53))
// console.log(Math.ceil(2.53))
// console.log(Math.floor(2.53))
// console.log(Math.sqrt(25))
// console.log(Math.min(4, 6, 2, 8))
// console.log(Math.max(4, 6, 2, 8))

console.log(Math.random())  // always outputs b/w 0 and 1
console.log((Math.random() * 10) + 1)
console.log(Math.floor((Math.random() * 10) + 1))

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)