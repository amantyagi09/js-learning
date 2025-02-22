const accountId = 144553
let accountEmail = "aman@gmail.com"
var accountPassword = "1234" // this var has scope problem. so we never use var anymore.
accountCity = "Delhi" // we can define a variable in such a way also but this way is not recommended.
let accountState // if we do not define the value of a variable then js represent it as undefined.


// accountId = 12345 // we cannot assign const a new value
accountEmail = "abc@gamil.com"
accountPassword = "123"
accountCity = "Bangalore"

console.log(accountId); // this is very time taking as we have to add each variable separately.
// so we have a new feature called .table

console.table([ accountId, accountEmail, accountPassword, accountCity, accountState])
