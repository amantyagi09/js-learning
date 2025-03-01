function sayMyName(){
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("N");
}

// sayMyName()

// function add(a,b){   //parameters
//     console.log(a+b);
// }

function add(a,b){   
    return (a+b)
}

 const result = add(5,6)     //arguments
//  console.log("result", result);

function loginUserMessage(username = "tyagi"){ // now it will never be undefined
    if (username == undefined) {          // if(!username){}
        console.log("Please enter your name");
        return
    }
    
    return `${username} just logged in`
    
}

// console.log(loginUserMessage("aman"));
// console.log(loginUserMessage());     // undefined if username is  not set in fn


function calculateCartPrice(val1, val2, ...num1){         //rest operator-> all the inputs are added to the array
    return num1
}

// console.log(calculateCartPrice(200,400,300,2000,500));


const user= {
    username: "sam",
    price: 99
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);       // this is how we pass object to the function
}

// handleObject(user)
handleObject({
    username: "AMAN",                 // we can also pass the values at the time of function call.
    price: 399
})


const myNewArray = [100, 200, 300, 400]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,600]));    // we can pass the array at the time of fn call as well



 

