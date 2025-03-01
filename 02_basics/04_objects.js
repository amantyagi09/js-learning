// const tinderUser = new Object()       // singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sameer"
tinderUser.isLoggedIN = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Aman",
            lastname: "Tyagi"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}

// const obj3  = {obj1 , obj2}
// const obj3 = Object.assign( obj1, obj2)      // concatinate in first obj given
// const obj3 = Object.assign({}, obj1, obj2)       // this add both the obj in empty obj given 
const obj3 = {...obj1, ...obj2}                   // spread
// console.log(obj3);
// console.log(obj1);

const users = [
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 2,
        email: "xyz@gmail.com"
    }
]

// console.log(users[1].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));              // gives all the keys in array form so we can use this thing in future for looping and many more purposes
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIN'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// console.log(course.courseInstructor);

const {courseInstructor: instructor} = course        // de-structure of object like we changed the name of the key from courseInstructor to instructor
console.log(instructor);


