// Immediately Invoked Function Expressions(IIFE)



// function chai(){
//     console.log(`DB CONNECTED`);
    
// }
// chai()

// global scope ke pollution se kayi baar problem hoti h to use htane k liye we use iife
(function chai(){
    // named iife bcz it has a name.
    console.log(`DB CONNECTED`);
    
})();
 // we should apply ; to let iife to know where to end immediate invoke
(  (name) => {
    console.log(`DB CONNECTED TWO ${name}`);    
})('aman')