// GLOBALS - No window
// _dirname = filename
// require = function to use modules(common JS)
// module = info about current module
// process = info about env where the program is being executed
// console.log(__dirname)

// setInterval(()=>{
//     console.log('Hello World!')
// }, 1000)


// Modules


const names = require('./4-names');
const sayHi = require('./5-utils')

const data = require('./6-alternative-flavor')
console.log(data);
require('./7-mind-grenade')
// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)