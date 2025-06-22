function setuserName(username) {
    this.username= username
    console.log(`called`);
    
}

function createUser(username, email, password){
    
    //setuserName(username)              // this method is called but its reference is not hold so it removes its reference context4 
    //setuserName.call(username)           // isme bhi isne reference to rakha but vo reference kisis kaam ka nhi kyonki vo call hote hi khtm ho jata h
    setuserName.call(this, username)       // ab vo method iske this ko refer krega aur delete hone ke baad bhi rhega
 
    this.email = email 
    this.password = password
}

const chai = new createUser('chai', 'chai@gmail', 123)
console.log(chai);
