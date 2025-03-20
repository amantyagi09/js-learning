// FOR OF LOOP


const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
    
// }


const greetings = "Hello world!"

// for (const greet of greetings) {
//     console.log(greet);
    
// }



// MAPS

const map = new Map()              // they only have unique values even if the values are repeated it will inly consider it once.
map.set('IN',"INDIA")
map.set('USA',"AMERICA")
map.set('CAN',"CANADA")
map.set('IN',"INDIA")


// console.log(map);

// for (const [key , value] of map) {
//     console.log(`${key} : ${value}`);
// }



const myObjects = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const {key , value} of myObjects ) {
//     console.log(`${key} : ${value}`);
// }

// FOR_OF_LOOP is not made for the iteration of objects....