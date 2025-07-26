let score = '23'

// console.log(typeof (score));    // string

let valueInNumber = Number(score)   //type casting

// console.log(typeof(valueInNumber))

/*
Please note that if i try to convert value of score which is a string ('23') into a number by Number(score),
it will get converted in to a number.
Nut if the value of string is '23aa' and if i do Number(score) then also it will get converted and on checking
typeof(score), it will say that it is a number but if we output the value of type casted score, it will output NaN (not a number)

Look at conversions below:
'33' => 33
'33abc' => Nan
true => 1
*/
//***************OPERATIONS***************
let value = 3
let negValue = -value
// console.log(negValue)
let str1 = 'hello'
let str2 =' Dev'
// console.log(str1 + str2);    hello Dev
// console.log(2 + 2)   4
// console.log('1' + 2)
// console.log(1 + '2')
// console.log('1' + 2 + 2)
// console.log(1 + 2 + '2') Go through ECMA rules

// console.log(true)    true
// console.log(+true)   1
// console.log(+"")     0

// let num1, num2, num3

// num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++   //and ++gameCounter are different
console.log(gameCounter)

// prefix and postfix increment