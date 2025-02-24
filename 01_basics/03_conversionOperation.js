let score = "33abc"

console.log(typeof score);

let valueInNumer = Number(score)
console.log(valueInNumer); // this prints NaN which means the above convertion took place but the on printing it shows that it is 'not a number'

let score1 = null
console.log(typeof score1);

let newInput = Number(score1)
console.log(newInput); // 0

let score2 = undefined
console.log(typeof score2);

let newInput1 = Number(score2)
console.log(newInput1); // NaN



let score3 = true
console.log(typeof score3);

let newInput2 = Number(score3) // true=> 1, false =>0
console.log(newInput2);



let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // true but for every other value it is not fixed
// 1=> true; 0=> false
// "" => false
// "aman" => true


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);






