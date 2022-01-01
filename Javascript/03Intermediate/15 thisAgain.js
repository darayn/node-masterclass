console.log(this);


var user = {
    firstname: "Dhanesh",
    courseCount:4,
    getCoureCount: function(){
        console.log("Line 8", this);
        function sayHello(){
            console.log("hello");
            console.log("Line 11",this );
        }
        sayHello()
    },
}


user.getCoureCount()




//for all regular function calls this points to window objects