var User = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course Count is: ${this.courseCount}`);
    };
};

User.prototype.getFirstName = function(){
    console.log(`Your first name is: ${this.firstName}`);
}


var hitesh = new User("Dhanesh", 2)
hitesh.getCourseCount()

if(hitesh.hasOwnProperty("firstNamee")){
    hitesh.getFirstName()
}

// console.log(hitesh);


var sam = new User("Sam", 1)
sam.getCourseCount()
sam.getFirstName()
// console.log(sam);