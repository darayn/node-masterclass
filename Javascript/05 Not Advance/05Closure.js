// function init(){
//     var firstName = "Hitesh"
//     console.log("Inside Init");
//     function sayFirstName(){
//         console.log(firstName);
//     }
//     return sayFirstName;
// }

// var value = init();
// // console.log(firstName);
// value()




function doAddition(x){
    return function(y){
        return x+y;
    }

}


var add5 = doAddition(4);
console.log(add5(5));


console.log(doAddition(5)(5));
// doAddition(5)(5) ->currings