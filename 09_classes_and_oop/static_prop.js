class User {
    constructor(username) {
        this.username = username
    }
    logMe(){
        console.log(`USERNAME : ${this.username}`);
    }

    static createId(){                            // not to give access
        return `123`
    }
}

const aman = new User('aman')
// console.log(aman.createId());

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email

    }
}

const CAC = new Teacher('cac', "cac@yt")
CAC.logMe()
console.log(CAC.createId());
