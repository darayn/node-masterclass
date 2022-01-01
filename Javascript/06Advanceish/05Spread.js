// var returnedValue = Math.max(2,5,2,5,8,6)
// console.log(returnedValue);

// var myObj = {}

// Object.assign(myObj, {a:1, b:2,c:3,d:4},{z:9, y:8, x:7})
// console.log(myObj);


function sumOne(a,b){
    return a+b;
}

var myA = [5,4];

// console.log(sumOne(...myA)); /// ... spread operator

function sumTwo(a,b,...args){

    let sum = 0;
    console.log(args);
    let multi = a*b;
    for (const arg of args) {
        sum+= arg;
    }

    return [sum, multi];
}

console.log(sumTwo(2,5,8,1,6));