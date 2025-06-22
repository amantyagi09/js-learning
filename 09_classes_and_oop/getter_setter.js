class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    get email() {
        return this._email.toUpperCase()
    }

    set email(x){
        this._email = x 
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value
    }
}

const aman =new User('aman@123', "abc")
console.log(aman.password);
console.log(aman.email);

