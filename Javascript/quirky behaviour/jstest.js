const student = {
    age:44,
    name:{
        firstName : "Hitesh",
        lastName: "Choudhary"
    },
};



student.age = 19;
console.log(student);
Object.freeze(student);
student.age = 16;
console.log(student);
Object.freeze(student.name);
student.name.firstName = "Not Hitesh"

console.log(student);