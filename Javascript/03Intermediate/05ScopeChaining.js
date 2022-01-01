var name = "Dhanesh"

console.log("Line Number 3", name);

function sayName (){
    var name = "Hi D"
    console.log("Line no 6", name);
    sayNameTwo()
    function sayNameTwo(){
        var name = "MR. Dc"
        console.log("Line no 10", name);
    }
}

sayName()