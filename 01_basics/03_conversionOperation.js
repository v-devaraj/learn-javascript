let score = '23'

console.log(typeof (score));    // string

let valueInNumber = Number(score)   //type casting

console.log(typeof(valueInNumber))

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