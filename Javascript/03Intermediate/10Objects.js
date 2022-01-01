var  user = {
    firstName : "Dhanesh",
    lastName : "Phulphagar",
    role: "Admin",
    loginCount: 32,
    facebookSignedIn: true,
}
console.log(user.firstName);
console.log(user['lastName']);


console.log(user.loginCount);
user.loginCount = 44

console.log(user.loginCount);


console.table(user);