function myFunk() {
    console.log("a");
    console.log("b");
    console.log("c");
    console.log("d");
    console.log("e");
    
}
// myFunk()

// function addTowNumber(number1,number2){
//     console.log(number1 + number2);
    
// }
const result = addTowNumber(10, 5)
// console.log("result", result);


function addTowNumber(number1,number2){
    // let result = number1 + number2
    // return number1 + number2
    
}

function loginUserMessage (username = "sam"){
    if(!username){
        console.log("please enter your name");
        return
    }

    return `${username} just logged in`
}

// console.log(loginUserMessage())


function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500));

const user ={
    username: "sumit",
    price: 199,
    age: 21

}
function handleObject(anyobject){
    console.log(`usernameis ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 200
})

const myNewArray = [200, 300, 400]
function returnSecondValue(getarray){
    return getarray[1]
    
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue(200, 400, 500, 1000));