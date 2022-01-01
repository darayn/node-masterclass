var myMaps = new Map();
myMaps.set(1,"Uno")
myMaps.set(2,"dos")
myMaps.set(3,"tres")
myMaps.set(4,"Cuatro")
console.log(myMaps);


// for (let key of myMaps.keys()) {
//     console.log(`Key is ${key}`);
// }

// for (let values of myMaps.values()) {
//     console.log(`Values is ${values}`);
// }

for (let [key,value] of myMaps) {
    console.log(`Key is ${key} and Value is ${value}`);
}



myMaps.forEach((v,k)=> console.log(`${v} and key is ${k}`))


myMaps.delete(2)
console.log(myMaps);