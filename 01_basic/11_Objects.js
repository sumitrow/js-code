// const tinderObject = new Object();
const tinderObject = {};

tinderObject.id = "123abc"
tinderObject.name = "sumit"
tinderObject.isLogged = false

//  console.log(tinderObject)

const regularUser = {
    email: "sm123@gmail.com",
    fullName: {
        UserFullName: {
            firstName: "hitash",
            lastName: "choudhry"
        }
    }
}
// console.log(regularUser.fullName.UserFullName);

// const obj1 = {1: "a", 2: "b",}
// const obj2 = {3: "a", 4: "b",}

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
// const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "sk@gmail.com"
    },
    {
        id: 1,
        email: "sk@gmail.com"
    },
    {
        id: 1,
        email: "sk@gmail.com"
    }
]
users[1].email
// console.log(tinderObject);

// console.log(Object.keys(tinderObject))
// console.log(Object.values(tinderObject))
// console.log(Object.entries(tinderObject))

// console.log(tinderObject.hasOwnProperty('isLogged'));

const course = {
    course: "js name hindi",
    price: "999",
    courseInstructor: "sumit"

}
// course.courseInstructor
const {courseInstructor: instructor} = course
console.log(instructor);

// {
//     "name": "sumit",
//     "courseName": "js hindi",
//     "price": "free"
// }