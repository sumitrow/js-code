
const name = "sumit"
const repoCount = 50

console.log(`helo my name sumit ${name} and my repoCountis${repoCount}`);

const game = new String('sumit-km-kumar');
// console.log(game[0]);
// console.log(game.__proto__);


// console.log(game.length);
// console.log(game.toUpperCase());
// console.log(game.charAt(2));
// console.log(game.indexOf('t'));
// console.log(game.toLowerCase());
// console.log(game.slice());

// const newString = game.substring(0, 4)
// console.log(newString);

const another = game.slice(0,4)
console.log(another);

const newStrings = "  sumitji  "
console.log(newStrings);
console.log(newStrings.trim());

const url = "sumit.com/inee%$sdisn"
console.log(url.replace('%$', '-'))

console.log(url.includes('ji'));

console.log(game.split('-'));