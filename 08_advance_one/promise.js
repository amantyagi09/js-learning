const PromiseOne = new Promise((resolve, reject) => {
    // do an async task
    //DB calls, cryptography, network calls
    setTimeout(function(){
        console.log("asnc task is complete");
        resolve()      // this is used to connect resolve with then in promise
    }, 1000)
})    // this is promise created

// how to use a promise

PromiseOne.then(function () {   // then is connected to resolve...
    console.log("Promise consumed");
    
})



new Promise(function (resolve, reject) {
    setTimeout(function(){
        console.log("Async Task Two");
        resolve();
        
    },1000)
}).then(function () {
    console.log("Async 2 resolved");
    
})


const PromiseThree = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve({username: "Aman", email: "aman@gmail.com"})
    },1000)
})

PromiseThree.then(function(user){
    console.log(user);
    
})




const PromiseFour = new Promise((resolve, reject) => {
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "aman", email: "aman99@gmail.com", password: "123"})
        }else{
            reject('ERROR: something went wrong')
        }
    },2000)
})


PromiseFour.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
    
})
.catch(function(error){
    console.log(error);
    
})
.finally(()=> console.log("The promise is either resolved or rejected")
)



const PromiseFive = new Promise((resolve, reject) => {
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: 'mansi', email: ' Mansi@gmail.com'})
        }else{
            reject('ERROR: JS went wrong')
        }
    },2000)
})

async function consumePromiseFive() {
    try {
        const response = await PromiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
    }
    
}

consumePromiseFive();


