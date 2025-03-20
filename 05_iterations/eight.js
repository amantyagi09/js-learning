const numbers = [1,2,3]

const myTotal = numbers.reduce( (acc, currVal)=> acc+ currVal ,0)           // currVal = value in array.
// in this 0 is given to acc for first time and after first cal the result is put in acc and further calculations are performed.
console.log(myTotal);
