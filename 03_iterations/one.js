// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 number is best number");
    }
    // console.log(element);

}

// console.log();

for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop value ${i}`);
    for (let j = 0; j < 10; j++) {
        // console.log(`inner loop value ${j} and inner loop ${i}`);
        //    console.log(i + "*" + j + '=' + i * j );

    }


}

const myArray = ["super", "louer", "mongo", "sumit"]
// console.log(myArray.length)

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// for (let index = 1; index <= 20; index++) {

//     if (index == 5) {
//         console.log(`detectedof i is ${index}`);
//         break
//     }
//     console.log(`The VAlue is ${index}`);
// }
for (let index = 1; index <= 20; index++) {

    if (index == 5) {
        console.log(`detectedof i is ${index}`);
        continue
    }
    console.log(`The VAlue is ${index}`);
}