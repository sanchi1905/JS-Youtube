const accountId = 144553
let accountEmail = "sanchi@google.com"
var accountPassword ="12345"
accountCity = "Tarn-Taran"
let accountState

// accountId = 2  //not allowed
accountEmail = "ss@google.com"
accountPassword="54321"
accountCity = "Amritsar"
// console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/* 
prefer not to use var
because of issue in block scope and functional scope
*/