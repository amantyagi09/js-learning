//singleton -> constructor se jb bnta h to singleton bnta h
 // Object.create(other method to create object which make it a singleton)


 //Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Aman",
    "full name": "Aman Tyagi",
    [mySym]: "myKey1",       // to add a symbol we have to use squr bracket
    age: 21,
    location: "faridabad",
    email: "aman@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);     // if we make the key string then this is the only way to access that thing.
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "Aman123@gmail.com"
// Object.freeze(JsUser)                    // no changes can take place
JsUser.email = "AmanTyagi@gmail.com"      //this will not happen
// console.log(JsUser.email);



JsUser.greeting = function() {
    console.log("Hello! everyone");
    
}

JsUser.greetingTwo = function() {
    console.log(`Hello!, ${this.name}`);
    
}

console.log(JsUser.greeting()) 
console.log(JsUser.greetingTwo()) 

 
