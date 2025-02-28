const score = 400

const balance = new Number(5000)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(3));

const otherNumber = 123.8903
console.log(otherNumber.toPrecision(2));

const hundred = 1000000
console.log(hundred.toLocaleString('en-IN')); // to local or defined number system.

// **************************MATHS********************

console.log(Math);
console.log(Math.abs(-4) ); // -ve to +ve
console.log(Math.round(4.6)); // ceil for upper value and floor for lower value.
console.log(Math.sqrt(5));
console.log(Math.min(5,3,6,1));//min of the array
console.log(Math.random()); 
console.log(Math.round(Math.random()*10)+1); // 1-9 
const min = 10
const max = 20

console.log(Math.round((Math.random() * (max-min+1)) + min)); //to get a value between some random values so we use this formula with min and max values.









