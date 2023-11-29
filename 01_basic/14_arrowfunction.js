const user = {
    username: "sumit",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}
//  user.welcomeMessage()
//  user.username = "sam"
//  user.welcomeMessage()

// console.log(this);


// function chai() {
//     let username = "sumit"
//     console.log(this.username);
// }
// chai()

const chai = () => {
    let username = "sumit"
    console.log(this);
}
// chai()

// const addTow = (num1, num2) =>  (num1 + num2)
const addTow = (num1, num2) =>  ({username: "sujjit"})
console.log(addTow(24,12));


