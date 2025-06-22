// ES6

// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//        return `${this.username.toUpperCase()}`
        
//     }
// }

// const aman = new User('aman', 'tyagi@', 1234)
// console.log(aman.encryptPassword());
// console.log(aman.changeUsername());


// BTS : 
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tyagi = new User('aman', 'tyagi@123', 1234)
console.log(tyagi.encryptPassword());

console.log(tyagi.changeUsername());

