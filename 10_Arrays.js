const marvel_heros =  ["thor","spiderman","ironman"]
const dc_heros =  ["flash","superman","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros[3][1]);

// marvel_heros.concat(dc_heros)
// console.log(marvel_heros)
 
const allheros = marvel_heros.concat(dc_heros)
console.log(allheros)

const all_new_heros = [...marvel_heros,...dc_heros]

console.log(all_new_heros)

const another_arr = [1,1,4,[2,5],4,[5,7,5,7,[2,7,4],3,6]]
const real_another_arr = another_arr.flat(Infinity)

console.log(real_another_arr)


console.log(Array.isArray("ajitesh"))
console.log(Array.from("ajitesh"))
console.log(Array.from({name : "ajitesh"}))//interesting case here we have to define from which we have to make array

let score1 = 567
let score2 = 7
let score3 = 67
let score4 = 565

console.log(Array.of(score1,score2,score3,score4));
