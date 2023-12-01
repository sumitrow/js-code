const userImail = []

if(userImail){
    console.log("cot user imail");

}else{
    console.log("don't have user email");
}

// ******false values 

// false, 0, -0, bigInt 0n, "", null, undefined, NaN 

// ***** truthy values

// "0", 'false', " ", [], {}, funtion(){},

// if (userImail.length === 0){
//     console.log("Array is mt");

// }

const mtobject = {}

if (Object.keys(mtobject).length === 0){
    console.log("Object is mt");

}


/// Nullish Coalescing Opprator : null undefinde

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15


// Terniary oprator

// codition ? true : false 


const ictprice = 100
ictprice <= 80 ? console.log("less then 80"): console.log("more then 80")







// console.log(val1);