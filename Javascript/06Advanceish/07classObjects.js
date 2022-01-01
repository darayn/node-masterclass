// import User from "./06classjs"
const User = require("./06classjs")

const hitesh = new User("hitesh", "hitesh@lco")


console.log(hitesh.getInfo());

hitesh.enrollCourse("ReactBootcamp")
hitesh.enrollCourse("Angular Bootcamp")

let courses = hitesh.getCourseList();

courses.forEach((c) => console.log(c))

