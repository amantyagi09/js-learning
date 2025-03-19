const userEmail = " a@aman.ai"

if (userEmail) {
    console.log("got user email");
} else{
    console.log("dont have user email");
    
}

//falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
//"0", 'false', " ", []. {}, function(){},   


// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10          //5     // this assigns a value that is not null and if there exists no such value then null.
// val1 = null ?? 10              //10

console.log(val1);

// Terniary Operator
// condition ? true:false

