// Dates

let myDate = new Date()
// console.log(myDate.toTimeString()); // imply all to options available
// console.log(myDate.toISOString()); 
// console.log(myDate.toDateString()); 
// console.log(myDate.toJSON()); 
// console.log(myDate.toLocaleDateString()); 
// console.log(myDate.toLocaleString()); 
// console.log(myDate.toLocaleTimeString()); 
// console.log(myDate.toUTCString()); 

// console.log(typeof myDate); // Object

// let myCreatedDate = new Date(2024,7,9) // in JS the months start from 0.

// let myCreatedDate = new Date(2024,7,9,5,3)  // in tis the last 2 values are hour and minute.

let myCreatedDate = new Date("02-14-2024") 
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp); // this shows the time in millisec from 1 jan 1970

// console.log(myCreatedDate.getTime());//date converted to millisec


let newDate = new Date()
console.log(newDate.getTimezoneOffset());

newDate.toLocaleString('default', {
    weekday: 'long' // to get all options - ctrl+spacebar
}) // in this we can customize the way the localestring should give its result.

console.log(newDate.toLocaleString());
