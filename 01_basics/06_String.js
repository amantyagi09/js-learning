const name = "Aman"
const age = 22
// to concatinate
// console.log(name + age); 

console.log(`My name is ${name} and my age is ${age}`);



const gameName = new String('Aman Tyagi')
console.log(gameName.length); //10
console.log(gameName.__proto__); // object prototype

console.log(gameName.toUpperCase());

console.log(gameName); // same as it uses stack memory as it is a primitive data type.

console.log(gameName.charAt(3));
console.log(gameName.indexOf('y'));

const newString = gameName.substring(0,4)
console.log(newString);



const something = "   Aman   "
console.log(something);

console.log(something.trim()); // remove extra spaces.



const url = "https://aman.com/aman%20tyagi"
console.log(url.replace('%20', '-')); // replace 









