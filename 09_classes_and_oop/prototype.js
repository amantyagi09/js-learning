let heros = ['thor', 'spiderman']

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }

}

Object.prototype.aman = function(){                     // this created a prototype that is present to each structure ie. string,object,array...etc
    console.log(`aman is present in all objects`);
}

Array.prototype.example = function(){               // this will only be present to all but only arrays.....
    console.log(`this is present to arrays only`);
    
}

//heroPower.aman();
//heros.aman();

//heros.example();    // this is present to array.... correct

//heroPower.example();      // here it gives error...


//--------------INHERITANCE-------------
const User = {
    name: 'aman',
    email: 'aman@gmail.com'
}
const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false,
    __proto__: teacher
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: teachingSupport             // this provides an access to the other objects as well.......__proto__
}

teacher.__proto__ = User
// modern syntax
Object.setPrototypeOf(teachingSupport, teacher)         // this provides access of teacher to teacherSupport

console.log(TASupport.isAvailable);

console.log(TASupport.makeVideo);

