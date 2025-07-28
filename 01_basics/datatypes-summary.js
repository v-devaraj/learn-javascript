/*Based on how a datatype is stored in memory and how it is accesed, datatypes => 2 types, primitive and non-primitive

I. Primitive Datatypes (7 in no.)
    1. String
    2. Number (both integer and floats fall here)
    3. Boolean
    4. null
    5. undefined
    6. Symbol
    7. BigInt (larger nos.)

II. Reference or Non-Primitive Datatypes:
    1. Array    (eg. ['a', 'b', 'c'], this is similar to list in python)
    2. Objects  (eg. expressed similar to dictionary in python)
    3. Functions 

Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/

//*********Memory Management in JS******
/*
There are 2 types of memories:
    1. stack type
        - used in all primitive datatypes
        - you get a copy of whatever stored in stack memory
    2. heap type
        - used in all non-primitive datatypes
        - we get a reference of original value stored in heap memory

*/
// Example:

let myYoutubename = "Devaraj"

let anothername = myYoutubename

console.log(anothername)