const marvel_h = ["ironman", "spiderman", "hulk"]
const dc_h = ["superman", "flash", "batman"]

// marvel_h.push(dc_h)  // array ke andr array aa gya

// console.log(marvel_h);
// console.log(marvel_h[3]);


// const new_h = marvel_h.concat(dc_h)     // concat returns a new array   
// console.log(new_h);


// const all_h = [...marvel_h, ...dc_h]      //spread(used instead of concat)
// console.log(all_h);


const new_arr = [1,2,3, [4,5,6], [6,7, [4,5]]]

let another_arr = new_arr.flat(Infinity)     // it spreads the array till infinite depth
console.log(another_arr);


console.log(Array.isArray("Aman"));          //check if the input is array or not
console.log(Array.from("Aman"));             // convert the string or any input in array
console.log(Array.from({name: "aman"}));             // interesting case as it cannot change it into array as we have not defined either the keys or the input is to be converted


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));        // make an array of the given elements

