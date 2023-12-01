

// for loop

// const arr = [1, 2, 3, 4, 5, 6]
// for (const num of arr) {
//     console.log(num);
    
// }

// const grretings = "hello world"
// for (const secod of grretings) {
//     console.log(secod);
    
// }

// maps 

const newmap = new Map()
newmap.set('in', "india")
newmap.set('usa', "america")
newmap.set('dl', "delhi")
newmap.set('in', "india")

console.log(newmap);

for (const [key, value] of newmap) {
    console.log(key, ':-', value);
    
}

const myobject = {
    game1: 'NPSA',  
    game2: 'Spiderman'  
}

for (const [myobj, value] of myobject) {
    console.log(myobj, ':', value);
    
}