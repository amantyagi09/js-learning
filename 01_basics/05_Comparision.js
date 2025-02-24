// console.log(2 > 1);

console.log(null > 0); // false
console.log(null == 0); //false
console.log(null >= 0); // true

// The reason is that an equality check (==) and comparisions ( > < >=) works differently as comparisions converts null into a number(0).
// === strict check (checks the data type also)

console.log("2" === 2); // false as they are 2 different data types.



