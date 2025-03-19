//global scope
let a = 300

if(true){
    // block scope
    let a = 10
    const b = 20
    var c = 30 /* var ka scope all over code hota j=h isly ye use nhi krte*/
    // console.log("INNER:",a);   // kyonki ye if ke andr run hua h and if ke andr a ki value 10 hai
    
}

// console.log(a);     /* yha value print hogi jo global ki hai kyonki ye ek global variable ko indivcate krta h*/
// console.log(b);
// console.log(c);


function one(){
    const username = "aman"

    function two(){
        const website = "youtube"
        console.log(username);  //child func can access parent variable
    }
    // console.log(website);

    two()
    
}
// one()


if (true) {
    const username = "aman"
    if (username==="aman") {
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username); 


// ====================interesting=====================================//

console.log(addone(5))

function addone(num) {
    return num + 1;
}


// addTwo(5)   error as it is a const which is not declared first

const addTwo = function(num) {
    return num + 2;
}

