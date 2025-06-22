const user = {
    username: "aman",         // properties
    logincount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("got detail from database");
        console.log(`Username: ${this.username}`);  // sirf username defined nhi h....to hm this keyword use krte h to define ki isi object ka username lena....
        console.log(this);      // isne saari values display kri h jo bhi isme present h..
        

        
    }
}

/*console.log(user.username);
console.log(user.getUserDetails());
console.log(this);   // empty in global context
*/

// CONSTRUCTOR FUNCTION

//const promiseOne = new Promise()   // this new is the constructor function -----------

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(` Welcome ${this.username}`);
        
    }


    return this            // it is implicitly defined to return this......
}

//const user1 = User("aman", 12, true)

// if we will not use 'new', the program will overwrite the existing instance....

const user1 = new User("aman", 12, true)
const user2 = new User("mansi", 10, false)


//console.log(user1);
//console.log(user2);
//user1.greeting()

console.log(user1.constructor);   // constructor is a reference to itself....



