var  user = {
    firstName : "Dhanesh",
    lastName : "Phulphagar",
    role: "Admin",
    loginCount: 32,
    facebookSignedIn: true,
    courseList: [],
    buyCourse: function (courseName) {
        this.courseList.push(courseName)
    },
    getCourseCount: function(){
        return `${this.firstName} is enrolled in total no of ${this.courseList.length} course`;
    },
    info: function(){
        return `${this}`
    }
}


var courseList = true
user.buyCourse("React JS Course")
user.buyCourse("Mern")


console.log(user.getCourseCount());

console.log(user.info());