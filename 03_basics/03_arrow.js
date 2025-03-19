const user = {
    username: "aman",
    price: 999,

    welcomeMessage: function (){
        console.log(`${this.username} , welcome to the website`);
        console.log(this);  // this print all the details of the current context.
        
    }
}

// user.welcomeMessage()
// user.username = "sam";  //here the context is changed
// user.welcomeMessage()

// console.log(this);  // this gives empty object bcz there is no global context which is indicated in this.

// function chai() {
//     let username = "aman"
//     console.log(this.username);  // this is not working in functions.
    
// }
// chai()



const chai = () => { //arrow function
    let username = "aman"
    console.log(this);    
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// const addTwo = (num1, num2) => num1 + num2     // implicit return

// const addTwo = (num1, num2) => ( num1 + num2 )    // implicit return

const addTwo = (num1, num2) => ({username: "aman"})

// console.log(addTwo(2,3));

// const myArray = [2,3,4,5,6]


