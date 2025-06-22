class User {
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;

    }
    addCourse(){
        console.log(`A new course is added by ${this.username}`);
        
    }
}

const aman = new Teacher('Aman', 'aman@', 123)
aman.addCourse()