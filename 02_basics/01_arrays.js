// ARRAY

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ['Shaktiman', 'Ironman']

const myArr2 = new Array(1, 2, 3, 4)    // square bracket is added automatically
// console.log(myArr);
// console.log(myArr[0])   

/* Properties
1. zero based indexing
2. copy operations create shallow copies (ie. what i change will be changed in the original array- ie. heap memory storage)*/

// METHODS OF ARRAY
// myArr.push(6)   // Adding values to an array
// myArr.push(7)
// console.log(myArr);
// myArr.pop()
// myArr.unshift(9) -- adds 9 at the begining of the array
// myArr.shift()  -- removes the first element from the array
// console.log(myArr);

// console.log(myArr.includes(4))
// console.log(myArr.indexOf(4))

// Join
// const newArr = myArr.join()
// console.log(newArr)
// console.log(typeof(newArr))

// SLICE AND SPLICE

console.log('A', myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log('B', myArr);

const myn2 = myArr.splice(1, 3) 
/*  SPLICE manipulates the original array where as slice do not
    Also in case of SPLICE, the end index points mentioned are also inclusinve
*/
console.log('C', myArr);
console.log(myn2);