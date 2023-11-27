const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flass", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const allNew_heros = [...marvel_heros, ...dc_heros]
// console.log(allNew_heros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [8, 9, [4, 5]]]

const realArray = anotherArray.flat(Infinity)
console.log(realArray);


console.log(Array.isArray("sumit"))
console.log(Array.from({name: "sumit"}))

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400
console.log(Array.of(score1, score2,score3,score4));
