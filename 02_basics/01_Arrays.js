// arrays

const myArrays = [0,1,2,3,4,5] // variable length hoti h js mei arrays ki 
const newArr = new Array("Aman","Mansi", "Sushma", "Shriom")

console.log(newArr[2]);

// <-------------- Array methods----------------->

// myArrays.push(6)           // add new value to array

// myArrays.pop()         // to delete the last element of the array


// myArrays.unshift(9)        //not a good practice
// myArrays.shift()             // removes the 1st element


// console.log(myArrays.includes(9))      // ques if the element is pressent or not
// console.log(myArrays.indexOf(9))             // -1
// console.log(myArrays.indexOf(3))



// const newArr2 = myArrays.join()      // this joins the array but make it a string
// console.log(newArr2) 
// console.log(typeof newArr2)        //string


//------slice and splice-------

console.log("A" , myArrays)

const myn1 = myArrays.slice(1,3)
console.log(myn1)
console.log("B" , myArrays)


const myn2 =   myArrays.splice(1,3)       // last included eg.3 and the original array is split into 2 parts..... original manipulated.
console.log("C", myArrays)

console.log(myn2)






// console.log(myArrays);