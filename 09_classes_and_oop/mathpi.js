console.log(Object.getOwnPropertyDescriptor(Math, "PI"));


const aman = {
    age: 21,
    place: "Panipat",
    mobileNumber: 9518603039
}

console.log(Object.getOwnPropertyDescriptor(aman, "age"));     // to know the desscription of the property

// to manage the availability of the property


Object.defineProperty(aman, 'age',{
        //writable: false,
        enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(aman, "age"));     

for (let [key, value] of Object.entries(aman)) {
    console.log(`${key};${value}`);
    
}