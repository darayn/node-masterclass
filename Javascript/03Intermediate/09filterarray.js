var testArray = [2,4,9,8,7,6,2,3,]

// console.log(testArray.fill('h', 2,7));


const myNumbers = [23, 24,266,84,164,564]


const result = myNumbers.filter((num) => num>266)

console.log(result);


var users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];


// console.log(users.slice(1));


users.splice(1,2,"Hi", "bye")  // --> 1 - starting pos   2 - count  hi - > replacing element
console.log(users);