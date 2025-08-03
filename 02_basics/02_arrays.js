const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros) // array inside array is added
//console.log(marvel_heros);
// console.log(marvel_heros[3][0]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// SPREAD OPERATOR
// const all_new_heros = [...marvel_heros, ...dc_heros]    
/* here multiple arrays can be added */
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Devaraj"))
console.log(Array.from("Devaraj"))
console.log(Array.from({name : "Devaraj"})) 
/* interesting case for interviewa. That is you will have to specify if you wish to create arrays from keys or values, else you will get empty list. */

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  
// same operation as Array.from
