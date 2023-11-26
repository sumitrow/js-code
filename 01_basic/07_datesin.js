let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
//  console.log(typeof myDate);

//  let myCreateDate = new Date(2023, 10, 23, 5, 3)
//  let myCreateDate = new Date("2023-01-14")
 let myCreateDate = new Date("01-14-2023")
//  console.log(myCreateDate.toLocaleDateString());

 let myTimes = Date.now()
//  console.log(myTimes);
//  console.log(myCreateDate.getTime());
//  console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDay())

newDate.toLocaleDateString('default', {
    weekday: "long"
    
})
console.log(newDate)