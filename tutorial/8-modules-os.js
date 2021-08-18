const os = require('os')
// info aboout current user

const user = os.userInfo()
console.log(user);

// method returns the system uptime in seconds

console.log(`the system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)



// 1:04:23