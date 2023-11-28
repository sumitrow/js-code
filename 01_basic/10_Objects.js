

const mySyl = Symbol("key1")

const JsUser = {
    name: "sumit",
    "full name": "sumit kumar",
    [mySyl]: "myskkeqw",
    age: 19,
    location: "delhi",
    email: "sk12@gmail.com",
    isLoggedIn: false,
    lastLoggedDays: ["monday","saturday"]

}
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySyl]);

JsUser.email = "sumit@gmail.com";
// Object.freeze(JsUser)
JsUser.email = "sumitkumar@gmail.com";
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello");
}
JsUser.greetingTow = function(){
    console.log(`hello js ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTow());